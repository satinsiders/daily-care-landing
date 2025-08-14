function runPipeline(steps, initialContext = {}) {
  const context = { ...initialContext };

  for (const step of steps) {
    const stepInput = {};
    if (Array.isArray(step.inputs)) {
      for (const key of step.inputs) {
        if (Object.prototype.hasOwnProperty.call(context, key)) {
          stepInput[key] = context[key];
        }
      }
    }

    const output = step.run(stepInput);
    Object.assign(context, output);
  }

  return context;
}

module.exports = { runPipeline };
