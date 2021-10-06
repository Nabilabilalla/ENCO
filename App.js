import React from 'react';
import { BrowserRouter as Router, Route, StaticRouter, Switch } from 'react-router-dom';
import Login from './src/screens/Login';

// import Home from './screens/Home';


export default function App() {
    return ( <
        Router >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Login }
        /> < /
        Switch >

        <
        /Router> 
    );
}