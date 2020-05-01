import React from 'react';
import { Switch , Route } from 'react-router-dom';

import MainPage from './mainpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';



const Mainheader = () => (
    <Switch>
        <Route exact path="/"  component={MainPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        

    </Switch>
)

export default Mainheader;