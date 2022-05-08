import React from 'react';
import PropTypes from 'prop-types';
import ContainerStyle from './styled';

function Container({ children }) {
  return (
    <ContainerStyle>
      <div>{ children }</div>
    </ContainerStyle>
  );
}

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
export default Container;
