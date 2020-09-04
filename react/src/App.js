import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import {Product} from './Product'


function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/dashboard'>
                    <Dashboard/>
                </Route>
                <Route exact path='/dashboard/product'>
                    <Product/>
                </Route>
            </Switch>
        </BrowserRouter>)
};

export default App;