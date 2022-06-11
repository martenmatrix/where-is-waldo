import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, push, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB9BJBVa2UtjarhtFJ9KSRlPvrg6G9QqOM",
    authDomain: "where-is-waldo-e61b2.firebaseapp.com",
    databaseURL: 'https://where-is-waldo-e61b2-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: "where-is-waldo-e61b2",
    storageBucket: "where-is-waldo-e61b2.appspot.com",
    messagingSenderId: "1011447303942",
    appId: "1:1011447303942:web:4c4697da1d49f13ff0d887"
};

const app = initializeApp(firebaseConfig);

const databaseHandler = (function () {
    const database = getDatabase(app);

    async function getCoordinatesFor(characterId) {
        const charactersSolutionsReference = ref(database, `solutions/${characterId}`);
        const coordinatesSnapshot = await get(charactersSolutionsReference);
        const coordinates = coordinatesSnapshot.val();
        return coordinates;
    }

    async function uploadHighscore(name, timeInMs, formattedTime) {
        return new Promise((resolve) => {
            const reference = ref(database, 'highscores');
            push(reference, {
                name,
                time: {
                    ms: timeInMs,
                    formatted: formattedTime,
                },
            })
            .then(() => resolve());
        });
    }

    function onHighScoreTop10Change(onChange) {
        const reference = ref(database, 'highscores');
        reference
        .orderByChild('time/ms')
        .on('value', (snapshot) => onChange(snapshot.val()), 
                        error => console.error(error));

        // returns close connection function
        return () => ref.off('value', onChange);
    }

    return { getCoordinatesFor, uploadHighscore, onHighScoreTop10Change  };
})();

export { databaseHandler }; 