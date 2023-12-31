import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.primaryColor};
  height: 40px;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const StyledHomeLink = styled(Link)`
  font-size: 40px;
  display: flex;
  text-decoration: none;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  font-weight: bold;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  text-align: center;
  align-self: center;
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  font-weight: bold;
  cursor: pointer;
`;

const Navbar = () => (
  <StyledNavbar>
    <StyledHomeLink to="/">L&apos;Movies</StyledHomeLink>
    <StyledLink to="/movies">Movies</StyledLink>
    <StyledLink to="/shows">TV Shows</StyledLink>
    <StyledLink to="/actors">Actors/actresses</StyledLink>
  </StyledNavbar>
);

export default Navbar;
