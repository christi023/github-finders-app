import React from 'react';
import { Link } from 'react-router-dom';
// style
import {ErrorStyle } from '../components/styles/ErrorStyle';

const Error = () => {
  return (    
  <ErrorStyle>
    <div>
      <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">Back home</Link>
    </div>
  </ErrorStyle>
 
  )
};
;
export default Error;
