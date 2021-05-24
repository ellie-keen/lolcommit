const got = require('got');
const commands = require('../../bin/commands');

jest.mock('got');
jest.mock('../../bin/backupMessages', () => ({
  backupMessages: ['Random backup message!'],
}));

test('getCommitMessage returns a random commit message', async () => {
  got.get.mockReturnValueOnce({ body: 'Random message!' });

  const result = await commands.getCommitMessage({
    prefix: false,
    commit: false,
  });

  expect(result).toBe('Random message!');
});

test('getCommitMessage returns a random commit message when GET request fails', async () => {
  got.get.mockImplementation(() => {
    throw new Error();
  });

  const result = await commands.getCommitMessage({
    prefix: false,
    commit: false,
  });

  expect(result).toBe('Random backup message!');
});
