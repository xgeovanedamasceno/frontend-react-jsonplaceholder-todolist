/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Container from './components/Container';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import Subtitle from './components/Subtitle';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header>
          <Title title="Header Title" />
        </Header>
        <Routes>
          <Route
            path="/"
            element={
              <Home subtitle="Users Page" />
        }
          />
          <Route
            path="/user/:id"
            element={
              <UserProfile title="Todo User APP" subtitle="User Profile - Todolist" />
          }
          />
        </Routes>
        <Footer>
          <Subtitle subtitle="Footer Subtitle App" />
        </Footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
