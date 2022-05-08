import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import User from '../../components/User';
import Subtitle from '../../components/Subtitle';

function Home({ subtitle }) {
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
    <Page>
      <Subtitle subtitle={subtitle} />
      { renderUsers() }
    </Page>
  );
}

Home.propTypes = {
  subtitle: PropTypes.string.isRequired,
};

export default Home;
