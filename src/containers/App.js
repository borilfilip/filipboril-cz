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

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Menu/>
                <main>
                    <Container>
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

export default App;
