import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

// images
import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
  const [id, setID] = useState();
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profiles');
    } catch (error) {
      alert('falha no login tente novamente ');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo" />

        <form onSubmit={handleLogin}>
          <h1>Make your login</h1>

          <input
            type="text"
            placeholder="Your id"
            value={id}
            onChange={(event) => setID(event.target.value)}
          />
          <button type="submit" className="button">
            Log in
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color={'#e02041'} /> I don't have a registration
          </Link>
        </form>
      </section>
      <img src={herosImg} alt="heros" />
    </div>
  );
}
