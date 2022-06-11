import Modal from "./Modal";
import UploadHighscore from "./UploadHighscore";
import HighscoreTable from "./HighscoreTable";
 
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

function HighscoreModal({ show, onSubmit, scoreUploaded, highscores }) {
    const [showTable, setShowTable] = useState(false);

    function onNameSubmit(name) {
        onSubmit(name);
        setShowTable(true);
    }

    return (
        <Modal show={show}>
            <Wrapper>
                {showTable && scoreUploaded ? <HighscoreTable /> : 
                                              <UploadHighscore onSubmit={onNameSubmit} />}
            </Wrapper>
        </Modal>
    );
}

export default HighscoreModal;