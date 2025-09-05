import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { neighborhoods } from './config/neighborhoods';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/tambore11" replace />} />
        {Object.keys(neighborhoods).map(id => (
          <Route 
            key={id}
            path={`/${id}`}
            element={<LandingPage neighborhoodId={id} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
