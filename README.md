# Async-Comp-App

Example of async components in React.

## Tech

- React
- React Router

## How to use asyncComponent hoc

```javascript
const AsyncHello = asyncComponent({
  importComponent: () => import("./components/Hello"),
  loader: <Spinner />,
  errorFallback: <Error />,
  timeWithoutLoader: 200, // in ms / OPTIONAL(default 300) - when the component load faster then provided value loader won't be use
});
```

## Preloading component

```javascript
const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/hello" onMouseOver={AsyncHello.preloadComponent}>Hello</Link>
    </li>
  </ul>
);
```


### Setup

```sh
$ npm install
```

```sh
$ npm start
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
