import React from 'react';
import { Switch, Route } from'react-router-dom';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
    </Switch>
);