import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

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
        <Route
          path="/user/:id"
          element={
            <UserProfile title="Todo User APP" subtitle="User Profile - Todolist" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
