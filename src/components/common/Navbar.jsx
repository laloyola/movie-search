import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
  padding: 10px;
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.backgroundColor};
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;

const Navbar = () => (
  <StyledNavbar>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/movies">Movies</StyledLink>
  </StyledNavbar>
);

export default Navbar;
