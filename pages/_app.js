import App, { Container } from "next/app";

class MyApp extends App {
  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(res => console.log(`Result : ${res}`))
        .catch(err => console.error(`Error : ${err}`));
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
