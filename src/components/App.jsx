import { useAlert } from '@blaumaus/react-alert';
import { createGlobalStyle } from 'styled-components';
import { useEffect, useState } from 'react';

import Header from './Header';
import StartGameModal from './StartGameModal';
import SearchImage from './SearchImage';
import HighscoreModal from './HighscoreModal';

import Game from '../game';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`

export default function App() {
    const [charactersNotFound, setCharactersNotFound] = useState(null);

    const [showStartModal, setShowStartModal] = useState(true);
    const [showHighscoreModal, setShowHighscoreModal] = useState(false);
    const [scoreUploaded, setScoreUploaded] = useState(false);

    const [time, setTime] = useState(null);
    const alert = useAlert();

    function startGame() {
        Game.start()
        setShowStartModal(false);
    }

    function refreshCharacters() {
        const charactersNotFound = Game.getCharactersNotFound();
        setCharactersNotFound(charactersNotFound);
    }

    function getTime() {
        const timePassedFormatted = Game.getTimeElapsed();
        setTime(timePassedFormatted);
    }

    async function markCharacter(absoluteX, absoluteY, characterId) {
        const isCorrect = await Game.markCharacterAt(characterId, absoluteX, absoluteY);
        if (isCorrect) {
            alert.success("You've found a character");
            refreshCharacters();
            const hasWon = Game.hasWon();

            if (hasWon) {
                alert.success(`You've found all characters in ${Game.getTimeElapsed()}`);
                setShowHighscoreModal(true);
            }
        } else {
            alert.error("Incorrect");
        }
    }

    async function uploadHighscore(name) {
        await Game.uploadHighscore(name);
        setScoreUploaded(true);
    }

    useEffect(() => {
        refreshCharacters();
    }, []);

    useEffect(() => {
        getTime();
        const interval = setInterval(getTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <GlobalStyle />

            <Header time={time}/>
            <StartGameModal onStart={startGame} show={showStartModal}/>
            <SearchImage charactersToFind={charactersNotFound} onCharacterSelect={markCharacter}/>
            <HighscoreModal onSubmit={uploadHighscore} show={showHighscoreModal} scoreUploaded={scoreUploaded}/>
        </>
    )
}