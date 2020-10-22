import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';
// style
import { AuthWrapperStyle } from '../components/styles/AuthWrapperStyle';

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <AuthWrapperStyle>
        <img src={loadingGif} alt="spinner" />
      </AuthWrapperStyle>
    );
  }
  if (error) {
    return (
      <AuthWrapperStyle>
        <h1>{error.message}</h1>
      </AuthWrapperStyle>
    );
  }
  return <>{children}</>;
}

export default AuthWrapper;
