import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de connexion ici
  };

  return (
    <div className="LoginPage">
      <form onSubmit={handleSubmit}>
        <label>
          Nom d'utilisateur:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Mot de passe:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default LoginPage;
