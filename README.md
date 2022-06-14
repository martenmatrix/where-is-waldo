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

##  :wrench: Installation

If you want to run the application on your local pc or just want to contribute, do the following steps:

1. Clone the repository.
	`git clone https://github.com/martenmatrix/personal-website`

2. Install the dependencies.
	`npm install`

2. If you want to run the website on your localhost in an development environment type:
	`npm run start`

3. If you want to build the site for production. Run `npm run build` or on windows `$env:CI=$false; npm run buildWarningsAsErrors;`. A folder called “build” should get created. You may serve the site with a static server with the following command: `serve -s build`.
> :warning: You need to have the `serve` package installed. Install it with `npm install -g serve`.

## :blue_book: Technology Stack

- **Node.js** v.16.13.1
- **Create React App** v5.0.0
- **Jest** v.28.1.0
- **React Testing Library** v.13.2.0
	- **@testing-library/jest-dom** v.5.16.4
	- **@testing-library/user-event** v.14.2.0
    - **@testing-library/react** v.13.2.0
    - **react-select-event** v.5.5.0
- **Bootstrap** v.5.1.3
	- **reactstrap** v.9.0.3
- **React Select** v.5.3.2
- **React Alert** v.7.0.5
> :warning: This package is not yet supported for the React version used. I fixed this with a fork of the project. For more information, visit [this GitHub issue](https://github.com/schiehll/react-alert/issues/192).
- **Styled Components** v.5.3.5
- **Firebase (Hosting, Realtime Database)** v.9.8.1

## :exclamation: Known Issues

- If the player doesn't find all characters after 24 hours, the timer resets to `00:00:00` because the milliseconds passed are converted to a date object and it's day is stripped out later to only receive the time. A solution to this is shown in [this answer on Stack Overflow](https://stackoverflow.com/a/67256291).
- Data is written to the database from the clients browser, this makes it very easy to create manipulated highscores. However, the clients permissions prevents him from deleting/editing highscores.

## :pray: Credits

- [Picture from Gus Morais](https://www.behance.net/gallery/110549933/2020Christmas-illustration-for-Washington-Post)

## :scroll: License

[MIT](https://github.com/martenmatrix/where-is-waldo/blob/master/LICENSE)