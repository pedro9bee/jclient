import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/**Páginas*/
import TelaEntrada from './view/tela-entrada';
import Login from './view/login';
import ListaCasos from './view/lista-casos';
import DetalheCaso from './view/detalhe-caso';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Route exact path="/" component={TelaEntrada} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/detalhecaso" component={DetalheCaso} />
				<Route exact path="/lista-casos" component={ListaCasos} />
			</Router>
		</Provider>
	);
}

export default App;
