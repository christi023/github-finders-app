import React from 'react';
import { GithubContext } from '../context/context';
// style
import { FollowersStyle } from './styles/FollowersStyle';

const Followers = () => {
  const { followers } = React.useContext(GithubContext);
  //console.log(followers);
  return (
    <FollowersStyle>
      <div className="followers">
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </FollowersStyle>
  );
};

export default Followers;
