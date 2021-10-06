import React from 'react';
import { BrowserRouter as Router, Route, StaticRouter, Switch } from 'react-router-dom';
import Login from './src/screens/Login';
import Password from './src/screens/Password';
import Register from './src/screens/Register';

// import Home from './screens/Home';


export default function App() {
    return ( <
        Router >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Login }
        /> <
        Route exact path = "/Register"
        component = { Register }
        /> <
        Route exact path = "/Password"
        component = { Password }
        /> <
        /Switch>

        <
        /Router> 
    );
}