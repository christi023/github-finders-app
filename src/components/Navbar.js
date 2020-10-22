import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// style
import { NavbarStyle } from './styles/NavbarStyle';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <NavbarStyle>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && (
        <h4>
          Welcome, <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}
      {isUser ? (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}
    </NavbarStyle>
  );
};

export default Navbar;
