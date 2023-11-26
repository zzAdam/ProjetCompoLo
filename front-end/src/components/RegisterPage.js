import React, { useState } from 'react';
import './RegisterPage.css';

function RegisterPage() {
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
    email: '',
    address: ''
    // Ajoutez d'autres champs au besoin
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription ici
  };

  return (
    <div className="RegisterPage">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom d'utilisateur:
          <input type="text" name="username" value={userDetails.username} onChange={handleChange} />
        </label>
        <label>
          Mot de passe:
          <input type="password" name="password" value={userDetails.password} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userDetails.email} onChange={handleChange} />
        </label>
        <label>
          Adresse:
          <input type="text" name="address" value={userDetails.address} onChange={handleChange} />
        </label>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default RegisterPage;
