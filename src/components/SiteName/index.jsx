import React from 'react';
import PropTypes from 'prop-types';

function SiteName({ title }) {
  return (
    <h1>{ title }</h1>
  );
}

SiteName.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SiteName;
