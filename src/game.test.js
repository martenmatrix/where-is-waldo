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

    const solutions = {
        "candy-cane-gingerbread": {
          "x": {
            "from": 1368,
            "to": 1499
          },
          "y": {
            "from": 1097,
            "to": 1220
          }
        },
        "juggling-gingerbread": {
          "x": {
            "from": 967,
            "to": 1053
          },
          "y": {
            "from": 1531,
            "to": 1697
          }
        },
        "waving-gingerbread": {
          "x": {
            "from": 20,
            "to": 20
          },
          "y": {
            "from": 20,
            "to": 20
          }
        }
      }

    const game = Game;

    test.skip('returns 00:00 as time formatted when game has not started', () => {
        const timePassedFormatted =  game.getTimeElapsed().formattedTime;
        expect(timePassedFormatted).toBe('00:00');
    });

    // IMPORTANT: Currently the code is unable to return the time correctly in that specific unlikely case.
    test.todo('time elapsed can be greater than a day and is still returned correctly');

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
        expect(hasWon2).toBe(true);
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