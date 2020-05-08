import React, { useState } from 'react';
import logo from '../../images/logo-m.png';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../../config/firebase';
import ListaCasos from '../lista-casos'
import 'firebase/auth';
import './login.css'

import { useSelector, useDispatch } from 'react-redux';

function Login() {
	const [email, setEmail] = useState();
	const [senha, setSenha] = useState();
	const [msgTipo, setMsgTipo] = useState();
	const [msgErro, setMsgErro] = useState();
	const [classButon, setclassButon] = useState();

	const dispatch = useDispatch();
	const history = useHistory();

	const logar = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, senha)
			.then((resultado) => {
				setMsgTipo('sucesso');
				setTimeout(() => {
					dispatch({ type: 'LOG_IN', usuarioEmail: email });
					history.push('/lista-casos');
				}, 2000);
			})
			.catch((erro) => {
				setMsgTipo('erro');
				console.log(erro);
				setMsgErro(erro.message);
			});
	};

	return (
		<>
			<div className="">
				{
					//Verifica se o usuário está logado, caso esteja redireciona para  Home
					useSelector((state) => state.usuarioEmail) != null ? (
						<Redirect to="/listacasos" />
					) : null
				}
				<span className="row">
					<form className="form-signin mx-auto">
							<img className="" src={logo} alt="Logo" />
							<br />
						<div className="d-flex align-items-center">
							<span>
								<span className="text-white titulologo">Login</span>
							</span>
						</div>

						<label htmlFor="inputEmail" className="sr-only h">
							Email address
						</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="inputEmail"
							className="form-control"
							placeholder="Email address"
							name="email"
						/>

						<div style={{ marginTop: '10px' }}></div>
						<label htmlFor="inputPassword" className="sr-only">
							Password
						</label>
						<input
							onChange={(e) => setSenha(e.target.value)}
							type="password"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							name="password"
						/>
						<div style={{ marginTop: '10px' }}></div>

						<button
							name="btEntrar"
							onClick={logar}
                            className="btn-jus btn-lg btn-block d-float"
                            style={{fontSize: '9px' }}
							type="button"
						>
							<span
								className={
									msgTipo === 'sucesso'
										? 'spinner-border spinner-border-sm'
										: 'spinner-border spinner-border-sm d-none'
								}
								role="status"
								aria-hidden="true"
							></span>
							<span className={msgTipo === 'sucesso' ? 'd-none' : ''}>
								Entrar
							</span>
						</button>
							{msgTipo === 'sucesso' && (
								<span className="alert alert-warning avisofinal">
									<strong>Acesso Liberado</strong>
								</span>
							)}
                            {msgTipo === 'erro' && 	<span className="alert alert-warning avisofinal">{msgErro} </span>}
					</form>
				</span>
			</div>
		</>
	);
}

export default Login;
