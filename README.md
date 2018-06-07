# Reapt

A complete React Redux starterkit, configured with Webpack

## Init :

**Install Project :**
```bash
yarn setup
```

---> Remove git repository, install dependencies, and set package.json infos

**Update :**
```bash
yarn upgrade-interactive --latest (optionnal)
```

## Available command lines :

```bash
yarn start        // Start dev server
yarn dashboard    // Start dev server with Webpack-Dashboard
yarn build        // Compile Project
yarn build:srv    // Compile Project && Launch server for testing new build
yarn debug        // Debug in chrome://inspect
yarn analyse      // Show some stats
```

Also, you can use this command to speed up your workflow :

```bash
yarn mk [action] <component name || array of components> [options]
```
It use [mk-react-comp](https://www.npmjs.com/package/mk-react-comp) without global install. Full details and documentation on the webpage


## Loaders :

- **PostCSS :**
    - [CSS Next](http://cssnext.io/)
    - Auto-prefixer : prefix css
    - [Postcss Fixie](https://github.com/tivac/fixie) : easy-to-remember transforms for IE CSS Hacks
    - [CSSNano](http://cssnano.co/)
    - [CssListselectors](https://github.com/davidtheclark/list-selectors)
    - [Combine duplicated selectors](https://github.com/ChristianMurphy/postcss-combine-duplicated-selectors) : Automatically detects and combines duplicated css selectors so you don't have to
    - [postcss-sprites](https://github.com/2createStudio/postcss-sprites) 1
    - [postcss-sprites](https://github.com/mixtur/webpack-spritesmith) 2
    - [postcss-sprites](https://github.com/Jeff2Ma/postcss-lazysprite) 3

## Utils :

- Bundle analyze
- Webpack Statistics

## React :

| **React Default Components** | **Description** |
|----------|-------|
| [React-intl](https://github.com/yahoo/react-intl) | Internationalize React apps. This library provides React components and an API to format dates, numbers, and strings, including pluralization and handling translations. |
| [React Modal](https://reactcommunity.org/react-modal/) | React Modal Component |
| [React Notification](https://github.com/pburtchaell/react-notification) | React Notification Component |
| [React Carousel](https://github.com/FormidableLabs/nuka-carousel) | React Carousel Component |
| [React-simple-dropdown](https://github.com/Fauntleroy/react-simple-dropdown) | Non-prescriptive React.js dropdown toolkit |
| [Redux-form](http://redux-form.com/6.8.0/) | The best way to manage your form state in Redux |
| [React-Paginate](https://github.com/AdeleD/react-paginate) | A ReactJS component to render a pagination |
| [React Sticky](https://github.com/captivationsoftware/react-sticky) | <Sticky /> component for awesome React apps |
| [Redux Persist](https://github.com/rt2zz/redux-persist) | Persist and rehydrate a redux store |
| [React Helmet](https://github.com/nfl/react-helmet) |  A document head manager for React |
| [React Loadable](https://github.com/jamiebuilds/react-loadable) | A higher order component for loading components with dynamic imports |

## Style Helper


|                 | **Function / Class**    | **Description** |
|---------|-------|-------|
| **Alignments** | **flexbox**(*value = row*) | Add *display: flex* & *flex-direction: $direction* |
|                | **justify**(*value = center*) | Add *justify-content: $value* |
|                | **align**(*value = center*) | Add *align-items: $value* |
|                | **center**(*direction = row*) | Add all previous functions for perfect center alignment |
|                | **wrap**(*wrap = wrap*) | change flex wrap |
| **Fonts**      | **truncate()** | Truncate text on a single line |
|                | **truncateMulti(*font-size, line-height, lines-to-show*)** | Truncate text on multilines |
|                | **font-size**(*value*) | Remify font-size  |
| **Hidden**     | **.hidden** | Simple *display: none* |
| **Shadow**     | **shadowDepth**(*n*) | Add *box-shadow* on different depth level (0 to 5, 0 being 'none') |
| **Hoverable**  | **hover**(*bgColor, textColor, darkenValue = 12%*) | Define BG / text color and add darken color on :hover |
|                | **hoverText**(*textcolor, darkenValue = 12%*) | Define text color and add darken color on :hover |
|                | **shadowHover**(*depth = 1, hoverDepth = 3*) | Add box-shadow, and stronger box-shadow on :hover |
| **Radius** | **radius**(*value*) | Set border-radius on element |

## TO DO :

### Webpack :
- [x]  Add WebPack DashBoard
- [x]  Add Webpack 4
- [x]  Configure Dev Server
- [x]  ES-Lint Overlay in Browser
- [x]  Lazy Loading
- [x]  Code Splitting
- [x]  Bundle Analyser
- [x]  Extract Style with Webpack 4
- [x]  CSS chunks
- [x]  Add Webpack Stylish

### React :
- [x]  Add React Router Dom
- [x]  Add Redux
- [x]  Add ImmutableJS
- [x]  Add react components
- [x]  Separate templates and logic
- [x]  React 16.4
- [ ]  [Ducks Module](https://github.com/erikras/ducks-modular-redux)
- [x]  [Redux Auth](https://github.com/mjrussell/redux-auth-wrapper)
- [x]  Replace React Router Redux (deprecated) by [Connected React Router](https://github.com/supasate/connected-react-router)

### Internationalization :
- [x]  Add React-Intl

### Style :
- [x]  Add Stylus
- [x]  Combine duplicated selectors
- [x]  Allow resource loader for Stylus
- [x]  Allow Styled components

### Global :
- [x]  Add Setup script to delete Demo files
- [ ]  Add unit tests
- [ ]  Create CLI tool to choose between React or NextJs
- [x]  Create CLI tool for component creation

### Next :

 Switch from webpack-cli to [webpack-command](https://github.com/webpack-contrib/webpack-command) ?

 Switch from webpack-dev-server to [webpack-serve](https://github.com/webpack-contrib/webpack-serve) ?
