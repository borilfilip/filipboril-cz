import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Menu from '../components/Layout/Menu/Menu';
import Footer from '../components/Layout/Footer/Footer'
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Archive from '../components/Projects/Archive/Archive'
import Todo from "./Demos/Todo/Todo";
import Container from 'react-bootstrap/Container'
import BurgerBuilder from "./Demos/BurgerBuilder/BurgerBuilder";
import Error404 from "../components/Error/404/Error404";
import Notification from "./Notification/Notification";
import * as actions from "../store/burgerBuilder/actions";
import {connect} from "react-redux";

class App extends Component {
    componentDidMount () {
        this.props.tryAutoSignup();
    }

    render() {
        return (
            <BrowserRouter>
                <Menu/>
                <main>
                    <Container>
                        <Notification title={this.props.title} message={this.props.message} type={this.props.type} />
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/projects" component={Projects}/>
                            <Route path="/projects/archive" component={Archive}/>
                            <Route path="/demos/todo" component={Todo}/>
                            <Route path="/demos/burger-builder" component={BurgerBuilder}/>
                            <Route component={Error404}/>
                        </Switch>
                    </Container>
                </main>
                <Footer/>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        title: state.notification.title,
        message: state.notification.message,
        type: state.notification.type
    };
};

const mapDispatchToProps = dispatch => {
    return {
        notify: (title, message, type) => dispatch(actions.notify(title, message, type)),
        tryAutoSignup: () => dispatch(actions.checkAuthState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
