import React from 'react';
import { GithubContext } from '../context/context';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
// style
import { CardStyle } from './styles/CardStyle';

const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { avatar_url, html_url, name, company, blog, bio, location, twitter_username } = githubUser;
  return (
    <CardStyle>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || 'Jane Doe'}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness></MdBusiness>
          {company || 'Coding'}
        </p>
        <p>
          <MdLocationOn></MdLocationOn>
          {location || 'earth'}
        </p>
        <p>
          <a href={`https://${blog}`}>
            <MdLink></MdLink>
            {blog}
          </a>
        </p>
      </div>
    </CardStyle>
  );
};

export default Card;
