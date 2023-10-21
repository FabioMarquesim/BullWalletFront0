import React, { useState, useEffect } from 'react';
import api from '../../api/api';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const config = {
    headers:{
      "Access-Control-Allow-Origin": "*"
    }
  };

  useEffect(() => {
    async function fetchUsuarios() {
      const response = await api.get('/users',config);
      setUsuarios(response.data);
    }

    fetchUsuarios();
  }, []);

  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>{usuario.name}</li>
      ))}
    </ul>
  );
}

export default ListaUsuarios;