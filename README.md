# Reapt

A complete React Redux starterkit, configured with Webpack

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1dca985e69234d6fb20b8c37e505cb36)](https://www.codacy.com/app/JimmyBeldone/reapt?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JimmyBeldone/reapt&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/1dca985e69234d6fb20b8c37e505cb36)](https://www.codacy.com/app/JimmyBeldone/reapt?utm_source=github.com&utm_medium=referral&utm_content=JimmyBeldone/reapt&utm_campaign=Badge_Coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)  [![Greenkeeper badge](https://badges.greenkeeper.io/JimmyBeldone/reapt.svg)](https://greenkeeper.io/)  [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) ![license](https://img.shields.io/github/license/mashape/apistatus.svg)
![Release](https://badgen.net/github/release/JimmyBeldone/reapt/stable) ![Dependencies](https://badgen.net/david/dep/JimmyBeldone/reapt) ![DevDependencies](https://badgen.net/david/dev/JimmyBeldone/reapt) ![Travis](https://badgen.net/travis/JimmyBeldone/reapt)

* ReactJS
* Redux
* Webpack 4
* Babel 7
* Stylus
* HMR
* Code Splitting with **React.lazy** & **React.Suspense**
* Code Formatter (Prettier)
* Legacy & modern browser output build
* Eslint configured extended with Airbnb style guide & support for prettier
* Jest & Enzyme Configured
* Automatically lint & format code, when committing it. [Husky/Lint-Staged]
* Progressive Web App

## Init

**Install Project :**

```bash
yarn setup
```

---> Remove git repository, install dependencies, and set package.json infos

## Available command lines

```bash
yarn start                  // Start dev server
yarn build                  // Compile Project
yarn build:srv              // Compile Project && Launch server for testing new build

yarn test                   // Execute tests with Jest
yarn test:watch             // Execute tests with Jest an watch mode
yarn test:coverage          // Generate coverage report based on the tests

yarn commit                 // Run Commitizen to write beautiful commits
yarn release                // Run standard-version which generate changelog from commits names and increment release version
yarn post-release [branch]  // Push to remote branch with tags

```

Also, you can use this command to speed up your workflow :

```bash
yarn mk [action] <component name || array of components> [options]
```

It use [mk-react-comp](https://www.npmjs.com/package/mk-react-comp) without global install. Full details and documentation on the webpage

## React

| **React Default Components**                                                 | **Description**                                                                                                                                                          |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [React-intl](https://github.com/yahoo/react-intl)                            | Internationalize React apps. This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations. |
| [React Modal](https://reactcommunity.org/react-modal/)                       | React Modal Component                                                                                                                                                    |
| [React Notification](https://github.com/pburtchaell/react-notification)      | React Notification Component                                                                                                                                             |
| [React Carousel](https://github.com/FormidableLabs/nuka-carousel)            | React Carousel Component                                                                                                                                                 |
| [React-simple-dropdown](https://github.com/Fauntleroy/react-simple-dropdown) | Non-prescriptive React.js dropdown toolkit                                                                                                                               |
| [Redux-form](http://redux-form.com/6.8.0/)                                   | The best way to manage your form state in Redux                                                                                                                          |
| [React-Paginate](https://github.com/AdeleD/react-paginate)                   | A ReactJS component to render a pagination                                                                                                                               |
| [React Sticky](https://github.com/captivationsoftware/react-sticky)          | Sticky component for awesome React apps                                                                                                                                  |
| [Redux Persist](https://github.com/rt2zz/redux-persist)                      | Persist and rehydrate a redux store                                                                                                                                      |
| [React Helmet](https://github.com/nfl/react-helmet)                          | A document head manager for React                                                                                                                                        |
| [React Loadable](https://github.com/jamiebuilds/react-loadable)              | A higher order component for loading components with dynamic imports                                                                                                     |

## Style Helper

|                | **Function / Class**                                       | **Description**                                                    |
| -------------- | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| **Alignments** | **flexbox**(_value = row_)                                 | Add _display: flex_ & _flex-direction: $direction_                 |
|                | **justify**(_value = center_)                              | Add _justify-content: $value_                                      |
|                | **align**(_value = center_)                                | Add _align-items: $value_                                          |
|                |  **center**(_direction = row_)                             | Add all previous functions for perfect center alignment            |
|                | **wrap**(_wrap = wrap_)                                    | change flex wrap                                                   |
| **Fonts**      | **truncate()**                                             | Truncate text on a single line                                     |
|                | **truncateMulti(_font-size, line-height, lines-to-show_)** | Truncate text on multilines                                        |
|                | **font-size**(_value_)                                     | Remify font-size                                                   |
| **Hidden**     | **.hidden**                                                | Simple _display: none_                                             |
| **Shadow**     | **shadowDepth**(_n_)                                       | Add _box-shadow_ on different depth level (0 to 5, 0 being 'none') |
| **Hoverable**  | **hover**(_bgColor, textColor, darkenValue = 12%_)         | Define BG / text color and add darken color on :hover              |
|                | **hoverText**(_textcolor, darkenValue = 12%_)              | Define text color and add darken color on :hover                   |
|                | **shadowHover**(_depth = 1, hoverDepth = 3_)               | Add box-shadow, and stronger box-shadow on :hover                  |
| **Radius**     | **radius**(_value_)                                        | Set border-radius on element                                       |

## Next

- [ ]  Add unit tests
- [ ]  Create CLI tool to choose between React or NextJs
