import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function EventForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/events', { title, date, description })
      .then(() => {
        navigate('/events');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit} className="card p-4">
        <div className="mb-3">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Date:</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">Save Event</button>
      </form>
    </div>
  );
}

export default EventForm;
