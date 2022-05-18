import Modal from './Modal';
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
            <Modal />
        </>
    )
}