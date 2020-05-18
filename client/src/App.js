import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import AppNavBar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<AppNavBar />
					<Container>
						<ItemModal />
						<ShoppingList />
					</Container>
				</header>
			</div>
		</Provider>
	);
}

export default App;