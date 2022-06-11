import Game from './game';

const mockUploadHighscore = jest.fn(() => console.log('called!!!'));   

jest.mock('./firebase', () => ({
    __esModule: true,
    databaseHandler: {
        getCoordinatesFor: async (characterId) => {
            switch (characterId) {
                case 'candy-cane-gingerbread':
                    return ({
                        x: {
                            from: 1368,
                            to: 1499
                        },
                        y: {
                            from: 1097,
                            to: 1220
                        }
                    });
                case 'juggling-gingerbread':
                    return ({
                        x: {
                            from: 967,
                            to: 1053
                        },
                        y: {
                            from: 1531,
                            to: 1697
                        }
                    });
                case 'waving-gingerbread':
                    return ({
                        x: {
                            from: 709,
                            to: 772
                        },
                        y: {
                            from: 2069,
                            to: 2225
                        }
                    });
                default:
            }
        },
        uploadHighscore: (...args) => mockUploadHighscore(...args),
    }
}));

describe('play a normal game', () => {

    const currentCharacters = [{
            id: 'juggling-gingerbread',
            displayName: 'Juggling Gingerbread',
            image: 'juggling-gingerbread.png',
        },
        {
            id: 'waving-gingerbread',
            displayName: 'Waving Gingerbread',
            image: 'waving-gingerbread.png',
        },
        {
            id: 'candy-cane-gingerbread',
            displayName: 'Gingerbread with Candy Cane',
            image: 'candy-cane-gingerbread.png',
        },
    ]

    const game = Game;

    test('returns 00:00 as time formatted when game has not started', () => {
        const timePassedFormatted = game.getTimeElapsed();
        expect(timePassedFormatted).toBe('00:00:00');
    });

    // IMPORTANT: Currently the code is unable to return the time correctly in that specific unlikely case.
    test.todo('time elapsed can be greater than a day and is still returned correctly');

    game.start();

    test('able to get characters not found', () => {
        const notFound = game.getCharactersNotFound();

        expect(notFound).toEqual(currentCharacters);
    });

    test('returns true when character was hit and unable to hit multiple times', async () => {
        const characterToHit = {
            x: 1000,
            y: 1600,
            id: 'juggling-gingerbread'
        }

        const response1 = await game.markCharacterAt(characterToHit.id, characterToHit.x, characterToHit.y);
        expect(response1).toBe(true);

        const response2 = await game.markCharacterAt(characterToHit.id, characterToHit.x, characterToHit.y);
        expect(response2).toBe(false);
    });

    test("returns false when character wasn't hit", async () => {
        const characterToHit = {
            x: 200,
            y: 200,
            id: 'juggling-gingerbread'
        }

        const response = await game.markCharacterAt(characterToHit.id, characterToHit.x, characterToHit.y);
        expect(response).toBe(false);
    });

    test("returns true when won", async () => {
        const hasWon1 = game.hasWon();
        expect(hasWon1).toBe(false);

        await game.markCharacterAt('candy-cane-gingerbread', 1368, 1097);
        await game.markCharacterAt('juggling-gingerbread', 967, 1531);
        await game.markCharacterAt('waving-gingerbread', 709, 2225);

        const hasWon2 = game.hasWon();
        expect(hasWon2).toBe(true);
    });

    test("when won returns time elapsed", () => {
        const time = game.getTimeElapsed();
        expect(typeof time).toBe('string');
    });

    test("data resets when another game is started", () => {
        game.start();
        const notFound = game.getCharactersNotFound();
        expect(notFound).toEqual(currentCharacters);
    });

    test('able to upload highscore', async () => {
        await game.uploadHighscore('matrix');
        expect(mockUploadHighscore).toHaveBeenCalledWith('matrix', expect.any(Number), expect.any(String));
    });

});
