import { Table } from 'reactstrap';

function HighscoreEntry({ name, time }) {
    return (
        <tr>
            <th>{name}</th>
            <th>{time}</th>
        </tr>
    )
}

function HighscoreTable({ highscores }) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {highscores.map((highscore, index) => <HighscoreEntry key={index} name={highscore.name} time={highscore.time} />)}
            </tbody>
        </Table>
    );
}

export default HighscoreTable;