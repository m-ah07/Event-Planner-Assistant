import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function EventList() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/events')
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleCreate = () => {
    navigate('/create');
  };

  return (
    <div className="container">
      <h2>My Events</h2>
      <button className="btn btn-primary mb-3" onClick={handleCreate}>
        Create New Event
      </button>
      <ul className="list-group">
        {events.map((evt) => (
          <li key={evt._id} className="list-group-item">
            <strong>{evt.title}</strong> - {evt.date?.substring(0, 10)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
