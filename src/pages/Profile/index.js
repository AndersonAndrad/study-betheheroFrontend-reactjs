import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

// styles
import logoImg from '../../assets/logo.svg';
import './styles.css';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  // local storage
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');

  useEffect(() => {
    api
      .get('profile', {
        headers: {
          authorization: ongId,
        },
      })
      .then((response) => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert('error ao deletar o caso, tente novamente');
    }
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero" />
        <span>Welcome, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Register new case
        </Link>

        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color={'#e02041'} />
        </button>
      </header>

      <h1>Registered cases </h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>Case :</strong>
            <p>{incident.title}</p>

            <strong>Descriptions :</strong>
            <p>{incident.description}</p>

            <strong>Value :</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color={'#a8a8b3'} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
