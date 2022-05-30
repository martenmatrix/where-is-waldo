import { databaseHandler } from "./firebase";

import CandyCaneGingerbread from './img/candy-cane-gingerbread.png';
import JugglingGingerbread from './img/juggling-gingerbread.png';
import WavingGingerbread from './img/waving-gingerbread.png';

const Game = (function () {
    const _availableCharacters = [
        {
            id: 'juggling-gingerbread',
            displayName: 'Juggling Gingerbread',
            image: JugglingGingerbread,
        },
        {
            id: 'waving-gingerbread',
            displayName: 'Waving Gingerbread',
            image: WavingGingerbread,
        },
        {
            id: 'candy-cane-gingerbread',
            displayName: 'Gingerbread with Candy Cane',
            image: CandyCaneGingerbread,
        },
    ];

    let _timer = { startedAt: null, stoppedAt: null }
    let _notFoundCharacters = [..._availableCharacters];
    let _foundCharacters = [];

    function _getHHMMSS(milliseconds) {
        const dateObject = new Date(milliseconds);
        const dateString = dateObject.toISOString();
        const HHMMSS = dateString.slice(11, 19);
        return HHMMSS;
    }

    function _startTimer() {
        _timer.startedAt = Date.now();
    }

    function _stopTimer() {
        _timer.stoppedAt = Date.now();
    }

    function _resetData() {
        _timer  = { startedAt: null, stoppedAt: null };
        _notFoundCharacters = [..._availableCharacters];
        _foundCharacters = [];
    }

    function _removeCharacterNotFound(removeCharacterId) {
        const newCharactersNotFound = _notFoundCharacters.filter(character => character.id !== removeCharacterId);
        _notFoundCharacters = newCharactersNotFound;
    }

    function _characterIsNotFound(id) {
        const isNotFound = _notFoundCharacters.some((element) => element.id === id);
        return isNotFound;
    }

    function getCharactersNotFound() {
        return [..._notFoundCharacters];
    }

    function _getTime() {
        let totalMilliseconds;
        const gameStarted = _timer.startedAt !== null;
        const gameStopped = _timer.stoppedAt !== null;

        if (gameStarted && gameStopped) {
            totalMilliseconds = _timer.stoppedAt - _timer.startedAt;
        } else if (gameStarted && !gameStopped) {
            totalMilliseconds = Date.now() - _timer.startedAt;
        } else {
            totalMilliseconds = 0;
        }

        return {
            totalMilliseconds,
            formattedTime: _getHHMMSS(totalMilliseconds)
        }
    }

    function getTimeElapsed() {
        const timeObject = _getTime();
        return timeObject.formattedTime;
    }

    function hasWon() {
        if (_foundCharacters.length === _availableCharacters.length) {
            return true;
        }
        return false;
    }
    
    async function _isCharacterAt(characterId, x, y) {
        const coordinates = await databaseHandler.getCoordinatesFor(characterId);
        
        const correctX = coordinates.x.from <= x && coordinates.x.to >= x;
        const correctY =  coordinates.y.from <= y && coordinates.y.to >= y;

        if (correctX && correctY) {
            return true;
        }
        return false;
    }

    async function markCharacterAt(characterId, x, y) {
        const notFound = _characterIsNotFound(characterId);
        if (!notFound) return false;

        const isCorrect = await _isCharacterAt(characterId, x, y);
        if (isCorrect) {
            _foundCharacters.push(characterId);
            _removeCharacterNotFound(characterId);
        }

        if (hasWon()) {
            _stopTimer();
        }

        return isCorrect;
    }

    function start() {
        _resetData();
        _startTimer();
    }

    return { start, markCharacterAt, hasWon, getTimeElapsed, getCharactersNotFound };
})()

export default Game;