import App, { Container } from "next/app";

class MyApp extends App {
  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(res => console.log(`Service Worker Registered Result`, res))
        .catch(err =>
          console.error(`[Service Worker not registered] Error : `, err)
        );
    }
  }
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Component />
      </Container>
    );
  }
}

export default MyApp;
