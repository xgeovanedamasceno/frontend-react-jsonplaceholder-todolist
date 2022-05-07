# Development steps

1. Think and Planning
2. Create prototype
3. Set Development Enviroment
   - npx create-react-app my-app
   - install eslint
4. Development
   - Create components
     - Header
     - Title
     - Subtitle
     - Main
     - Button
     - User
     - Tasks
   - Create pages
     - Home Page (users)
     - User Page (todolist)
     - Not Found Page
   - Fetch API
   - Set routes
5. Tests
   - Usually each test should import:
     - '@testing-library/jest-dom'
     - { render, screen } from '@testing-library/react'
6. Style and Design
7. Deploy

# Notes

- How to reset or unstage on git?
  - git reset
  - git reset HEAD~1 hard

# ESLint Rules

## 1. A control must be associated with a text label.

## 2. 'React' must be in scope when using JSX

## 3. JSX not allowed in files with extension '.js'

before (rules 1, 2 and 3):

```
function Button() {
  return (
    <button></button>
  );
}

export default Button;
```

after:

```
import React from 'react';

function Button() {
  return (
    <button>Button Text</button>
  );
}

export default Button;
```

## 4. Headings must have content and the content must be accessible by a screen reader.

before:

```
import React from 'react';

function Subtitle() {
  return (
    <h2 />
  );
}

export default Subtitle;

```

after:

```
import React from 'react';

function Subtitle() {
  return (
    <h2>Text here</h2>
  );
}

export default Subtitle;
```

## 5. Expected parentheses around arrow function argument.

## 6. Expected a line break after this opening brace.

before (rules 5 and 6):

```
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
```

after:

```
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB,
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
```

## 7. 'children' is missing in props validation

## 8. 'title' is missing in props validation

## 9. propType "title" is not required, but has no corresponding defaultProps declaration.

before:

````
import React from 'react';

function Home({ title }) {
  return (
    <Header>
      <Title>{ title }</Title>
    </Header>
  );
}

export default Home;
|```

after:
```
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Title from '../../components/Title';

function Home({ title }) {
  return (
    <Header>
      <Title>{ title }</Title>
    </Header>
  );
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
```


## Libraries used

- eslint
- prop-types

## errors:

 console.error
    Warning: Failed prop type: Invalid prop `children` of type `array` supplied to `Container`, expected a single ReactElement.
        at Container (/home/xgeo/Desktop/dev-projects/frontend-react-jsonplaceholder-todolist/src/components/Container/index.jsx:4:22)
        at Home (/home/xgeo/Desktop/dev-projects/frontend-react-jsonplaceholder-todolist/src/pages/Home/index.jsx:9:17)

  #### How was fixed:

    before:
    ```
    import React from 'react';
    import PropTypes from 'prop-types';

    function Main({ children }) {
      return (
        <main>{ children }</main>
      );
    }

    Main.propTypes = {
      children: PropTypes.element.isRequired,
    };

    export default Main;
    ```

    after:
    ```
    import React from 'react';
    import PropTypes from 'prop-types';

    function Container({ children }) {
      return (
        <div>{ children }</div>
      );
    }

    Container.propTypes = {
      children: PropTypes.arrayOf(PropTypes.element).isRequired,
    };
    export default Container;
    ```

## Doubts

- jest vs testing-library
- fix or refactor
- how to mock a component for tests
- how to mock a custom hook for tests


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
````
