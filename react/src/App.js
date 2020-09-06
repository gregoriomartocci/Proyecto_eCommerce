import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import User from './User'
import { Product } from './Product'
import { Publication } from './Publication'
import Nav from './Nav'
import {Comments} from './Comments'

function App() {
	return (
		<>			
			<BrowserRouter>
			<Nav />
				<Switch>
					<Route exact path='/dashboard'>
						<User />
					</Route>
					<Route exact path='/dashboard/products'>
						<Product />
					</Route>
					<Route exact path='/dashboard/publication'>
						<Publication />
					</Route>
					<Route exact path='/dashboard/comments'>
						<Comments />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	)
};

export default App;