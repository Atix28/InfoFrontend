import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';





const Main = () => (
    <main>
        <Switch>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/register' component={Register}/>
            
        </Switch>
    </main>
)

export default Main;
