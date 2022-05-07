import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Container from '../../components/Container';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Subtitle from '../../components/Subtitle';

function UserProfile({ title, subtitle }) {
  return (
    <Container>
      <Header>
        <Title title={title} />
      </Header>
      <Main>
        <Subtitle subtitle={subtitle} />
      </Main>
      <Footer>
        <Subtitle subtitle={subtitle} />
      </Footer>
    </Container>
  );
}

UserProfile.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default UserProfile;
