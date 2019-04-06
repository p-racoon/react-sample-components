import React from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './About';
import ReactFormBootstrap from './About';

const Main = () => {
    return (
        <main className="container">
            <Switch>
                <Route exact path="/" component={About}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/react-form-bootstrap" component={ReactFormBootstrap}></Route>
            </Switch>
        </main>
    );
}

export default Main;
