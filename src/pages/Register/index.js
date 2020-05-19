import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

// images
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu id de acesso ${response.data.id}`);

      history.push('/');
    } catch (error) {
      alert('Erro no cadastro tente novamente');
    }
  }

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

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="nome da ong"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            placeholder="whatsapp"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="cidade"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <input
              placeholder="uf"
              style={{ width: 80 }}
              value={uf}
              onChange={(event) => setUf(event.target.value)}
            />
          </div>

          <button className="button">cadastrar</button>
        </form>
      </div>
    </div>
  );
}
