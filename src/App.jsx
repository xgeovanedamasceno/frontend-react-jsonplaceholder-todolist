/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import Container from './components/Container';
import Header from './components/Header';
import SiteName from './components/SiteName';
import Footer from './components/Footer';
import PageName from './components/PageName';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header>
          <SiteName title="Header Title" />
        </Header>
        <Routes>
          <Route
            path="/"
            element={
              <Home pageName="Users Page" />
        }
          />
          <Route
            path="/user/:id"
            element={
              <UserProfile pageName="User Profile - Todolist" />
          }
          />
        </Routes>
        <Footer>
          <PageName title="Footer Subtitle App" />
        </Footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
