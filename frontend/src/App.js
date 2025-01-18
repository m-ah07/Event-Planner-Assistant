import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <Router>
      <div>
        <h1 className="text-center my-4">Event Planner Assistant</h1>
        <Routes>
          <Route path="/" element={<AuthForm />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/create" element={<EventForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
