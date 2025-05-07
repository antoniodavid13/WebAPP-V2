import { useState } from 'react';
import "./login.css";

function Register() {
  const [nombre, setNombre] = useState('');

  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');


  return (
    <div className="login-page">
      
      <form className="login-container">
      <h2>Registrarse</h2>
      <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={email}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Register;
