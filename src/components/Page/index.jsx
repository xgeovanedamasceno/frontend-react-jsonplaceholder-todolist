/* eslint-disable react/prop-types */
import React from 'react';
import MainStyle from './styled';

function Page({ children }) {
  return (
    <MainStyle>{ children }</MainStyle>
  );
}

export default Page;
