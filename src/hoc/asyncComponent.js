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
      showLoading: false
    };

    static preloadComponent = () => importComponent() 

    async componentDidMount() {
      this.setState({
        loading: true
      });

      this.timeout = setTimeout(() => {
        this.setState({ showLoading: true});
      }, timeWithoutLoader);

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

      } catch (e) {
        this.setState({
          loading: false,
          error: true
        });
        clearTimeout(this.timeout);
      }
    }

    render() {
      const { component: Component, loading, error, showLoading } = this.state;

      if (loading && showLoading) {
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
