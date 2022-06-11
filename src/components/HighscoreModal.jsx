import Modal from "./Modal";
import UploadHighscore from "./UploadHighscore";
import HighscoreTable from "./HighscoreTable";
 
import { useState } from 'react';

function HighscoreModal({ show, onSubmit, highscores }) {
    const [showTable, setShowTable] = useState(false);

    function onNameSubmit(name) {
        onSubmit(name);
        setShowTable(true);
    }

    return (
        <Modal show={show}>
            {showTable ? <HighscoreTable /> : <UploadHighscore onSubmit={onNameSubmit} />}
        </Modal>
    );
}

export default HighscoreModal;