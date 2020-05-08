import React from 'react';
import './tela-entrada.css';
import logo from '../../images/logo-m.png';
import Login from '../login/';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function TelaPrincipal() {

	const history = useHistory();

	const ProtectedComponent = () => {
		history.push("/login");
	};
	setTimeout(() => {
		ProtectedComponent();
	}, 2000)
	return (
		<>
			<div className="fundo"></div>
			<div className="container principal">
				<img className="" src={logo} alt="Logo" />
				<span className="text-white subtitulo">Justiça simples e digital</span>
			</div>
		</>
	);
}

export default TelaPrincipal;
