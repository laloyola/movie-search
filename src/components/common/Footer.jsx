import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.primaryColor};
  position: sticky;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <StyledFooter>
    <h1>Footer Content</h1>
  </StyledFooter>
);

export default Footer;
