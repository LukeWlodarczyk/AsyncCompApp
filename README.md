# Async-Comp-App

## Tech

- React
- React Router

## How to use asyncComponent hoc

```
const AsyncHello = asyncComponent({
  importComponent: () => import("./components/Hello"),
  loader: <Spinner />,
  errorFallback: <Error />,
  timeWithoutLoader: 200, // in ms / OPTIONAL(default 300) - when the component load faster then provided value loader won't be use
});
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
