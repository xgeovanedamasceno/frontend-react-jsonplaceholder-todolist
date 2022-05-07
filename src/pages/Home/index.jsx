import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Container from '../../components/Container';
import Main from '../../components/Main';
import User from '../../components/User';
import Footer from '../../components/Footer';
import Subtitle from '../../components/Subtitle';

function Home({ title, subtitle }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  function renderUsers() {
    return (
      users.map((user, index) => (
        <User key={`${user.id}${user.id + index}`}>
          <Link to={`user/${user.id}`}>
            <h3>{user.name}</h3>
          </Link>
          <p>{user.email}</p>
        </User>
      ))
    );
  }

  return (
    <Container>
      <Header>
        <Title title={title} />
      </Header>
      <Main>
        <Subtitle subtitle={subtitle} />
        { renderUsers() }
      </Main>
      <Footer>
        <Subtitle subtitle={subtitle} />
      </Footer>
    </Container>
  );
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Home;
