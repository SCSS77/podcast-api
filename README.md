## Podcasts exercice

<dl>
  <dt>Podcasts Listpage</dt>
  - Show the list of the 100 most popular podcasts according to Apple's list.
  - Once the list has been obtained from the external service for the first time, it must be stored in the client so that it can only be requested again if more than one day has passed since the last time it was requested.
  - The user will be able to filter the podcasts displayed by entering a text string that will take into account both the title of the podcasts and the names of their authors.
  - Filtering should be immediate so that it reacts as the user enters his or her filter text.
  - By clicking on a podcast, the user will navigate to a detailed view of the podcast.

  <dt>Podcast detail page</dt>
  - A sidebar with the image of the podcast, its title, author and description should be displayed.
  - A main section should be displayed showing the number of episodes that the podcast currently has as well as a list of them indicating their title, publication date and duration.
  - Once the detail of a podcast has been obtained from the external service for the first time, it should be stored in the client so that it is only requested again if one day has passed since the last time it was requested.
  - Clicking on the title of an episode will navigate to the episode detail view.

  <dt>Episode page</dt>
  - The same sidebar must be displayed as in the previous view. Both the image and the podcast title and author must be links to the podcast detail view (these components are also allowed to have the same links in the previous view).
  - A main section should be displayed where the title of the podcast, its description and a basic audio player (native HTML5) to play the podcast will be displayed.
  - It should be noted that some episode descriptions contain HTML and this should be rendered (not escaped).
</dl>

## Quick start

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/SCSS77/podcast-api.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._
5.  Run `npm run clean` to delete the example app.

Now you're ready to rumble!

> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.
