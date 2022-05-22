import Modal from './Modal';
import Header from './Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
`

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Header time={'5:11'}/>
            <Modal isActive={false}/>
        </>
    )
}