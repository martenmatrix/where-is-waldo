# Where's Waldo?

This is a classical "Where's Waldo" game, however it does not contain other characters. The user is able to find three characters, upload his time taken to find them and compare his time to highscores from other players.
	
## Table of Contents

- [Deployed links](#globe_with_meridians-deployed-links)
- [Usage](#grey_exclamation-usage)
- [Features](#sparkles-features)
- [Installation](#wrench-installation)
- [Technology stack](#blue_book-technology-stack)
- [Known Issues](#exclamation-known-issues)
- [Credits](#pray-credits)
- [License](#scroll-license)

## :globe_with_meridians: Deployed links

The application is hosted at the following addresses:

- https://where-is-waldo-e61b2.web.app/
- https://where-is-waldo-e61b2.firebaseapp.com/

## :grey_exclamation: Usage

1. You'll be prompted with the characters to find when opening the site and a "Start Game" button.
2. Click the button to start the game.
3. Search for the characters in the image. If you've found a character left-click it and select it from the dropdown menu.
4. After you've found all three characters, a modal with get shown, where you can input your name.
5. Click the "Submit" button to submit your time with your name. Now you can see the top 10 times from other players.
6. Refresh the site to play another game.

If something does not work as expected, please [create an issue](https://github.com/martenmatrix/where-is-waldo/issues/new).

## :sparkles: Features

- timer counts the time passed until user found all characters and displays it live
- user is able to upload his highscore with his name
- user is able to view the top 10 uploaded highscores from other users
- found characters are automatically removed from the input box
- If the player doesn't find all characters after 24 hours, the timer resets to `00:00:00` because the milliseconds passed are converted to a date object and it's day is stripped out later to only receive the time. A solution to this is shown in [this answer on Stack Overflow](https://stackoverflow.com/a/67256291).
- Data is written to the database from the clients browser, this makes it very easy to create manipulated highscores. However, the clients permissions prevents him from deleting/editing highscores.

## Credits
- [Picture from Gus Morais](https://www.behance.net/gallery/110549933/2020Christmas-illustration-for-Washington-Post)