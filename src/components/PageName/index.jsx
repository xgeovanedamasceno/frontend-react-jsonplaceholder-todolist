import React from 'react';
import PropTypes from 'prop-types';

function PageName({ subtitle }) {
  return (
    <h2>{ subtitle }</h2>
  );
}

PageName.propTypes = {
  subtitle: PropTypes.string.isRequired,
};
export default Subtitle;
