import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Title from '../../components/Title';

function Home({ title }) {
  return (
    <Header>
      <Title>{ title }</Title>
    </Header>
  );
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
