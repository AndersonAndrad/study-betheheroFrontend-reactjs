import React from 'react';
import { Link } from 'react-router-dom';

// styles
import logoImg from '../../assets/logo.svg';
import './styles.css';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero" />
        <span>bem vindo, APAD</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>

        <button type="button">
          <FiPower size={18} color={'#e02041'} />
        </button>
      </header>

      <h1>casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>caso teste</p>

          <strong>DESCRICOES:</strong>
          <p>descricao teste</p>

          <strong>VALOR:</strong>
          <p>valor teste</p>

          <button type="button">
            <FiTrash2 size={20} color={'#a8a8b3'} />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>caso teste</p>

          <strong>DESCRICOES:</strong>
          <p>descricao teste</p>

          <strong>VALOR:</strong>
          <p>valor teste</p>

          <button type="button">
            <FiTrash2 size={20} color={'#a8a8b3'} />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>caso teste</p>

          <strong>DESCRICOES:</strong>
          <p>descricao teste</p>

          <strong>VALOR:</strong>
          <p>valor teste</p>

          <button type="button">
            <FiTrash2 size={20} color={'#a8a8b3'} />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>caso teste</p>

          <strong>DESCRICOES:</strong>
          <p>descricao teste</p>

          <strong>VALOR:</strong>
          <p>valor teste</p>

          <button type="button">
            <FiTrash2 size={20} color={'#a8a8b3'} />
          </button>
        </li>
      </ul>
    </div>
  );
}
