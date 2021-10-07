import React, { useState } from 'react';
import { BrowserRouter as Router, Route, StaticRouter, Switch } from 'react-router-dom';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Passwordnew from './src/screens/NewPassword';
import Password from './src/screens/Password';
import PasswordCode from './src/screens/PasswordCode';
import Register from './src/screens/Register';

// import Home from './screens/Home';


export default function App() {
    const [connecte, setConnecte] = useState([false, '', '', '']);

    const acceder = (estado) => {
        setConnecte(estado);
    }

    function direction() {
        switch (connecte.service) {
            case 'Home':
                return <Home / > ;
                break;
        }

    }
    return ( <
        Router >
        <
        Switch >
        <
        Route exact path = "/"
        component = { Login }
        /> <
        Route exact component = {
            () => connecte.connecte ? direction() : < Register acceder = { acceder }
            /> } / >
            <
            Route exact path = "/Password"
            component = { Password }
            />  <
            Route exact path = "/PasswordCode"
            component = { PasswordCode }
            /> <
            Route exact path = "/Passwordnew"
            component = { Passwordnew }
            />  <
            /Switch> <
            /Router> 
        );
    }