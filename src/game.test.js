import Game from 'game';

describe('play a normal game', () => {
    const currentCharacters = [
        {
            id: 'juggling-gingerbread',
            displayName: 'Juggling Gingerbread'
        },
        {
            id: 'waving-gingerbread',
            displayName: 'Waving Gingerbread'
        },
        {
            id: 'candy-cane-gingerbread',
            displayName: 'Gingerbread with Candy Cane'
        },
    ]

    const game = Game;
    game.start();

    test.skip('able to get characters not found', () => {
        const notFound = game.getCharactersNotFound();

        expect(notFound).toEqual(currentCharacters);
    });

    test.skip('returns true when character was hit and unable to hit multiple times', () => {
        const characterToHit = {
            x: 200,
            y: 200,
            id: 'juggling-gingerbread'
        }

        const response1 = game.markCharacterAt(characterToHit.id, characterToHit.x, characterToHit.y);
        expect(response1).toBe(true);

        const response2 = game.markCharacterAt(characterToHit.id, characterToHit.x, characterToHit.y);
        expect(response2).toBe(false);
    });

    test.skip("returns false when character wasn't hit", () => {
        const characterToHit = {
            x: 200,
            y: 200,
            id: 'juggling-gingerbread'
        }

        const response = game.markCharacterAt(characterToHit.id, characterToHit.x, characterToHit.y);
        expect(response).toBe(false);
    });

    test.skip("returns true when won", () => {
        const hasWon1 = game.hasWon();
        expect(hasWon1).toBe(false);
        
        // TODO mark other characters
    
        const hasWon2 = game.hasWon();
        expect(hasWon1).toBe(true);
    });

    test.skip("when won returns time elapsed", () => {
        const time = game.getTimeElapsed();
        expect(typeof time.formattedTime).toBe('string');
    });

    test.skip("data resets when another game is started", () => {
        game.start();
        const notFound = game.getCharactersNotFound();
        expect(notFound).toEqual(currentCharacters);
    });
})