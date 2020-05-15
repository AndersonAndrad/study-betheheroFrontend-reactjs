import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// images
import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo" />

        <form>
          <h1>faca o seu logon</h1>

          <input type="text" placeholder="your id" />
          <button type="submit" className="button">
            {' '}
            entrar
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color={'#e02041'} />
            nao tenho cadastro
          </Link>
        </form>
      </section>
      <img src={herosImg} alt="heros" />
    </div>
  );
}
