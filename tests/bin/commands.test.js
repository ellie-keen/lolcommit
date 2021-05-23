const got = require('got');
const commands = require('../../bin/commands');

jest.mock('got');

test('getCommitMessage returns a random commit message', async () => {
    got.get.mockReturnValueOnce({'body': 'Random message!'});
    const responsePromise = commands.getCommitMessage();

    responsePromise.then(function(result) {
        expect(result).toBe('Random message!');
    });
});
