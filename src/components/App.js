import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Menu from "./Layout/Menu/Menu";
import Footer from "./Layout/Footer/Footer";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Archive from "./Projects/Archive/Archive";
import Todo from "./Demos/Todo/Todo";
import Container from "react-bootstrap/Container";
import BurgerBuilder from "./Demos/BurgerBuilder/BurgerBuilder";
import Error404 from "./Error/404/Error404";
import Notification from "./Notification/Notification";
import * as actions from "../store/burgerBuilder/actions";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

class App extends Component {
  state = {
    language: this.props.language,
  };

  componentDidMount() {
    this.props.tryAutoSignup();
  }

  languageChangeHandler = (language) => {
    this.setState({ language });
  };

  render() {
    const { language } = this.state;
    const messages = this.props.messages[language];

    return (
      <BrowserRouter>
        <IntlProvider locale={language} messages={messages}>
          <Menu
            language={language}
            onLanguageChange={this.languageChangeHandler}
          />
          <main>
            <Container>
              <Notification
                title={this.props.title}
                message={this.props.message}
                type={this.props.type}
              />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route path="/projects/archive" component={Archive} />
                <Route path="/demos/todo" component={Todo} />
                <Route path="/demos/burger-builder" component={BurgerBuilder} />
                <Route component={Error404} />
              </Switch>
            </Container>
          </main>
          <Footer />
        </IntlProvider>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.notification.title,
    message: state.notification.message,
    type: state.notification.type,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    notify: (title, message, type) =>
      dispatch(actions.notify(title, message, type)),
    tryAutoSignup: () => dispatch(actions.checkAuthState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
