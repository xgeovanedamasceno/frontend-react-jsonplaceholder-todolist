import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Container from '../../components/Container';
import Main from '../../components/Main';
import User from '../../components/User';

function Home({ title }) {
  return (
    <Container>
      <Header>
        <Title>{ title }</Title>
      </Header>
      <Main>
        <User />
        <User />
      </Main>
    </Container>
  );
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
