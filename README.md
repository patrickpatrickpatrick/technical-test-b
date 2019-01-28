This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Testing Approach

Quite a few of the components do not have any testable logic as they do nothing but display data due to the way I have structured this project. For this reason I have opted not to test 'presentation' only components and focus only on the components with testable logic. The reducer and saga also have tests.