import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home title="TODO USERS APP" subtitle="A React Application" />
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
