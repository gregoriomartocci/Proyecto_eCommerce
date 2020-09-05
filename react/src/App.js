import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import User from './User'
import {Product} from './Product'

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/dashboard'>
                    <User/>
                </Route>
                <Route exact path='/dashboard/products'>
                    <Product/>
                </Route>
            </Switch>
        </BrowserRouter>)
};

export default App;