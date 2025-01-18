import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function AuthForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      api.post('/users/login', { email, password })
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          navigate('/events');
        })
        .catch((err) => console.error(err));
    } else {
      api.post('/users/signup', { name, email, password })
        .then(() => {
          alert('User registered! You can now login.');
          setIsLogin(true);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="container" style={{ maxWidth: '400px' }}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} className="card p-4">
        {!isLogin && (
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>

      <p className="mt-3">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button
          className="btn btn-link"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
}

export default AuthForm;
