const Game = (function () {
    const _availableCharacters = [
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
    ];

    let _timer = { startedAt: null, stoppedAt: null }
    let _notFoundCharacters = [..._availableCharacters];
    let _foundCharacters = [];

    function _getHHMMSS(milliseconds) {
        const dateObject = new Date(milliseconds);
        const dateString = dateObject.toTimeString();
        const HHMMSS = dateString.split(' ')[0];
        return HHMMSS;
    }

    function _startTimer() {
        _timer.startedAt = new Date.now();
    }

    function _stopTimer() {
        _timer.stoppedAt = new Date.now();
    }

    function _resetData() {
        _timer  = { startedAt: null, stoppedAt: null };
        _notFoundCharacters = [..._availableCharacters];
        _foundCharacters = [];
    }

    function _characterIsNotFound(id) {
        const isNotFound = _notFoundCharacters.some((element) => element.id === id);
        return isNotFound;
    }

    function getCharactersNotFound() {
        return [..._notFoundCharacters];
    }

    function _getTime() {
        const totalMilliseconds = _timer.stoppedAt - _timer.startedAt;

        return {
            ..._timer,
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
    
    function _isCharacterAt(characterId, x, y) {
        const isCorrect = true;
        return isCorrect;
    }

    function markCharacterAt(characterId, x, y) {
        const notFound = _characterIsNotFound(characterId);
        if (notFound) return false;

        const isCorrect = _isCharacterAt(characterId, x, y);
        if (isCorrect) {
            _foundCharacters.push({ characterId, x, y });
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