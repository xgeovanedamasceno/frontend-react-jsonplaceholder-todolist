import React from 'react';
import PropTypes from 'prop-types';

function PageName({ title }) {
  return (
    <h2>{ title }</h2>
  );
}

PageName.propTypes = {
  title: PropTypes.string.isRequired,
};
export default PageName;
