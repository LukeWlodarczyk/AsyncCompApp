import React, { Component } from "react";

export default ({
  importComponent,
  loader: Loader,
  errorFallback: ErrorMsg,
  timeWithoutLoader = 300
}) => {
  class AsyncComponent extends Component {
    state = {
      component: null,
      loading: false,
      error: false,
      timer: 0
    };

    async componentDidMount() {
      this.setState({
        loading: true
      });

      this.interval = setInterval(() => {
        this.setState({ timer: this.state.timer + 10 });
      }, 10);

      try {
        const { default: component } = await importComponent();

        // await new Promise((resolve, reject) => {
        //   console.log("generete error");
        //   reject();
        // });

        // await new Promise(resolve => {
        //   setTimeout(() => {
        //     console.log("make fetching longer");
        //     resolve();
        //   }, 2000);
        // });

        this.setState({
          loading: false,
          component: component
        });

        clearInterval(this.interval);
      } catch (e) {
        this.setState({
          loading: false,
          error: true
        });
        clearInterval(this.interval);
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
      return (
        nextState.component !== this.state.component ||
        nextState.loading !== this.state.loading ||
        nextState.error !== this.state.error ||
        nextState.timer > timeWithoutLoader
      );
    }

    render() {
      const { component: Component, loading, error, timer } = this.state;

      if (loading && timer > timeWithoutLoader) {
        return <Loader />;
      }

      if (error) {
        return <ErrorMsg />;
      }

      return Component ? <Component {...this.props} /> : null;
    }
  }

  return AsyncComponent;
};
