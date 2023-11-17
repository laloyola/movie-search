import React from 'react';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Navbar = () => (
  <StyledNavbar>
    <h1>Navbar</h1>
  </StyledNavbar>
);

export default Navbar;
