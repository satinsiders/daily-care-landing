const OpenAI = require('openai');

/**
 * Simple multi-step pipeline that inserts a QA check after each step.
 * If QA fails, the step is retried after invoking a fixer agent.
 * This does not guarantee perfect accuracy but aims to reduce hallucinations.
 */

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Generic model call
async function callModel(prompt) {
  const response = await client.responses.create({
    model: 'gpt-4.1-mini',
    input: prompt
  });
  return response.output[0].content[0].text;
}

// QA agent verifies whether a step's output is acceptable
async function qaCheck(step, output) {
  const qaPrompt = `You are a QA agent. Review the output of step "${step}". ` +
    `Respond with a JSON object {"pass": boolean, "feedback": string}.\n\n` +
    `Output: """${output}"""`;

  try {
    const qaText = await callModel(qaPrompt);
    return JSON.parse(qaText);
  } catch (err) {
    return { pass: false, feedback: 'QA parsing failed: ' + err.message };
  }
}

// Runs a single step with QA loop
async function runStep(stepName, generator, fixer) {
  while (true) {
    const result = await generator();
    const qa = await qaCheck(stepName, result);
    if (qa.pass) return result;
    if (!fixer) throw new Error(`QA failed for ${stepName}: ${qa.feedback}`);
    await fixer(result, qa.feedback);
  }
}

// Example pipeline with two steps
async function runPipeline() {
  const draft = await runStep(
    'draft',
    () => callModel('Write a short paragraph about daily self-care.'),
    (prev, feedback) => callModel(`Revise the draft based on this feedback: ${feedback}.\nDraft: ${prev}`)
  );

  const summary = await runStep(
    'summary',
    () => callModel(`Summarize this text in one sentence: ${draft}`),
    (prev, feedback) => callModel(`Fix the summary based on this feedback: ${feedback}.\nSummary: ${prev}`)
  );

  return { draft, summary };
}

if (require.main === module) {
  runPipeline().then((res) => console.log(res)).catch((err) => console.error(err));
}

module.exports = { runPipeline, runStep, qaCheck };
