## Known Issues
- If the player doesn't find all characters after 24 hours, the timer resets to `00:00:00` because the milliseconds passed are converted to a date object and it's day is stripped out later to only receive the time. A solution to this is shown in [this answer on Stack Overflow](https://stackoverflow.com/a/67256291).
- Data is written to the database from the clients browser, this makes it very easy to create manipulated highscores. However, the clients permissions prevents him from deleting/editing highscores.

## Credits
- [Picture from Gus Morais](https://www.behance.net/gallery/110549933/2020Christmas-illustration-for-Washington-Post)