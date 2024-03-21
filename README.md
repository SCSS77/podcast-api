<img src="https://raw.githubusercontent.com/SCSS77/podcast-api/8e74a12bd0124d65beaa3f54982e23ded9eaf32b/public/banner-next-react.jpeg" alt="react boilerplate banner" align="center" />

<br />

<p align="center" dir="auto">
  <a aria-label="Vercel logo" href="https://vercel.com" rel="nofollow">
    <img src="https://camo.githubusercontent.com/1210c36bead6cfcb15611855f43b91e6d1a786a7494277c443be911e5e48b84e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d414445253230425925323056657263656c2d3030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d56657263656c266c6162656c436f6c6f723d303030" data-canonical-src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&amp;logo=Vercel&amp;labelColor=000" style="max-width: 100%;">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/next" rel="nofollow">
    <img alt="" src="https://camo.githubusercontent.com/c2d412c35131fe13ccdee4ddf7879f5cffe90509f2bf0540b5428d76ded71476/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6e6578742e7376673f7374796c653d666f722d7468652d6261646765266c6162656c436f6c6f723d303030303030" data-canonical-src="https://img.shields.io/npm/v/next.svg?style=for-the-badge&amp;labelColor=000000" style="max-width: 100%;">
  </a>
  <a aria-label="License" href="https://github.com/vercel/next.js/blob/canary/license.md">
    <img alt="" src="https://camo.githubusercontent.com/9be3d0216cf01c592bce7bb948ec30b12d50e505f2ba05a6704f69d3b4ab5bcf/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f6e6578742e7376673f7374796c653d666f722d7468652d6261646765266c6162656c436f6c6f723d303030303030" data-canonical-src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&amp;labelColor=000000" style="max-width: 100%;">
  </a>
  <a aria-label="Join the community on GitHub" href="https://github.com/vercel/next.js/discussions">
    <img alt="" src="https://camo.githubusercontent.com/5c10e4f17a3f0976591009bd10aa09fd8ce885c54e4c6527ce1107006be252d6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6f696e253230746865253230636f6d6d756e6974792d626c756576696f6c65742e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d4e6578742e6a73266c6162656c436f6c6f723d303030303030266c6f676f57696474683d3230" data-canonical-src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&amp;logo=Next.js&amp;labelColor=000000&amp;logoWidth=20" style="max-width: 100%;">
  </a>
</p>

<br />

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

1.  Make sure that you have Node.js v16.20.2 and npm v8.19.4 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/SCSS77/podcast-api.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
5.  Run `npm install` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm run dev` (`yarn run dev`) to see the example app at `http://localhost:3000`._
6. To use the tests you can enter this script in the terminal `npm run test` (`yarn test`).

Now you're ready to rumble!

> To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
