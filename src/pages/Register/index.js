import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

// images
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be the hero" />
          <h1>cadastro</h1>
          <p>
            faca seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" /> ja possuo cadastro
          </Link>
        </section>

        <form>
          <input type="text" placeholder="nome da ong" />
          <input type="email" placeholder="e-mail" />
          <input placeholder="whatsapp" />

          <div className="input-group">
            <input placeholder="cidade" />
            <input placeholder="uf" style={{ width: 80 }} />
          </div>

          <button className="button">cadastrar</button>
        </form>
      </div>
    </div>
  );
}
