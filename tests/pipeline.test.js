const { runPipeline } = require('../utils/pipeline');

describe('runPipeline', () => {
  test('passes only required data to each step', () => {
    const step1 = {
      inputs: ['text'],
      run: jest.fn(({ text }) => ({ summary: text.slice(0, 5) })),
    };

    const step2 = {
      inputs: ['summary'],
      run: jest.fn(({ summary }) => ({ final: summary.toUpperCase() })),
    };

    const result = runPipeline([step1, step2], {
      text: 'hello world',
      irrelevant: 'should not be forwarded',
    });

    expect(step1.run.mock.calls[0][0]).toEqual({ text: 'hello world' });
    expect(step2.run.mock.calls[0][0]).toEqual({ summary: 'hello' });
    expect(result.final).toBe('HELLO');
    expect(result.irrelevant).toBe('should not be forwarded');
  });
});
