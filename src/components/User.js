import React from 'react';
// components
import Card from './Card';
import Followers from './Followers';
// style
import { UserStyle } from './styles/UserStyle';

const User = () => {
  return (
    <section className="section">
      <UserStyle className="section-center">
        <Card></Card>
        <Followers></Followers>
      </UserStyle>
    </section>
  );
};
export default User;
