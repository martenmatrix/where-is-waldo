import Modal from './Modal';
import Header from './Header';
import SearchImage from './SearchImage';
import Game from '../game';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`

export default function App() {
    const characters = Game.getCharacters();

    return (
        <>
            <GlobalStyle />
            <Header time={'5:11'}/>
            <SearchImage charactersToFind={characters}/>
            <Modal isActive={false}/>
        </>
    )
}