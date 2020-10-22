import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loginImg from '../images/login-img.svg';
// style
import { LoginStyle } from '../components/styles/LoginStyle';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <LoginStyle>
      <div className="container">
        <img src={loginImg} alt="github-user" />
        <h1>Github User</h1>
        <button className="btn" onClick={loginWithRedirect}>
          Login / sign up
        </button>
      </div>
    </LoginStyle>
  );
};

export default Login;
