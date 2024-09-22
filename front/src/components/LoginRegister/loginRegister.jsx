import React, { useState } from "react";
import './LoginRegister.css';
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from 'axios';

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setMessage('Connexion réussie ! ');
            // Ici, tu peux stocker le token ou rediriger l'utilisateur
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'Erreur de connexion');
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });
            setMessage('Inscription réussie ! ');
            // Ici, tu peux stocker le token ou rediriger l'utilisateur
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'Erreur d\'inscription');
        }
    };

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form onSubmit={handleLogin}>
                    <h1>Connexion</h1>
                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <FaEnvelope className="icon" />
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Mot de passe" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Souvenez-vous de moi
                        </label>
                        <a href="#">Mot de passe oublié</a>
                    </div>
                    <button type="submit">Connecter</button>
                    <div className="register-link">
                        <p>Vous n'avez pas de compte?<a href="#" onClick={registerLink}>S'inscrire</a></p>
                    </div>
                    {message && <p>{message}</p>}
                </form>
            </div>

            <div className="form-box register">
                <form onSubmit={handleRegister}>
                    <h1>Inscription</h1>
                    <div className="input-box">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <FaEnvelope className="icon" />
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Mot de passe" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            J'accepte les termes et conditions
                        </label>
                    </div>
                    <button type="submit">S'inscrire</button>
                    <div className="register-link">
                        <p>Vous avez déjà un compte?<a href="#" onClick={loginLink}>Connecter</a></p>
                    </div>
                    {message && <p>{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
