# Wireframe

The wireframe now shows how the solution will contain mainly a map and a filter to get the proper data from backend api

<img src="/src/docs/wireframe.png" alt="wireframe" title="Wireframe">

# Architecture

## Components
The **App** will contain mainly 4 components:
- Filter
- GoogleMaps component
- Loader
- Error Handler

The **Filter** component will contain three main components
- Calendar
- Agencies dropdown
- isSuccessFul launch check

The `Calendar` will contain `start` and `end` date to query the data. Whenever this data changes we will trigger a backend api that we will describe in a few moments later on this document.
The `agency` dropdown will not trigger any backend data but will filter the actual list of launches by the launchId selected by the dropdown
The `isSuccessful` check will do something similar as the `agency` and will filter the existing data

The **GoogleMap** component will use the https://www.npmjs.com/package/@react-google-maps/api library and you can find all the documentation there in how to implement and use

The **Loader** component will get the **loading** state from state manager and will render a spinner when it is set to true 
The **Error** component will show a banner when an error state is changed in the store

## Store

The store will use [Zustand](https://github.com/pmndrs/zustand) as state manage because this solution is very simple and there is no need to use redux or any other complex store manager. This library is a basic hook and will return functions and states when you need them. You just simple invoke the hook from what ever component you need the data from and that's it.

- startDate: string 
- endDate: string 
- agency?: string 
- isSuccessful: boolean 
- loading: boolean, 
- error?: string, 
- launchList: Array<any>

the action functions will update this accordingly and effect will dispatch an api call in case it is required (only if startDate or endDate changes)

## Queries

There is a list of predefined queries that fetch the data and only a list of them will be enough and share this functions across the components to use

- getNext3MonthLaunches
- getLaunches
- getLaunchInfo
- getFirstLaunch

## API

The api will use the native **fetch** javascript function and will use a _try_ _catch_ _finally_ block to update the `error` `loading` and `data`

## Design system

The UI library for this project is Chakra UI for two reasons [Chakra-UI](https://chakra-ui.com/)
- Is very lightweight and very well documented
- Worked with the creator of this project Segun Adebayo in a past experience and we both managed to create a personalized UI system for that company with no much effort

<img src="/src/docs/architecture.png" alt="architecture" title="Architecture">
<img src="/src/docs/legend.png" alt="legend" title="Legend">

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
