import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import '../styles/css/style.css';

import App from './components/App';
import Home from './components/views/Home/Home';
import NotFound from './components/views/NotFound/NotFound';
import RootReducer from './reducers/root';

export const store = createStore(RootReducer);

ReactDOM.render(
(<Provider store={store}>
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
</Provider>),
document.getElementById('root'));
