import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

// images
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident() {
  // UseState
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [value, setValue] = useState();

  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleNewIncident(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });
      history.push('/profiles');
    } catch (error) {
      alert('erro ao cadastrar caso, tente novamente');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="be the hero" />
          <h1>cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um heroi para resolver
            isso.
          </p>

          <Link className="back-link" to="/profiles">
            <FiArrowLeft size={16} color="#e02041" /> Voltar para profile
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            type="text"
            placeholder="Titulo do caso"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            placeholder="descricao"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            placeholder="valor em reais"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button className="button" type="submit">
            cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
