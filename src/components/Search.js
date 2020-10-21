import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { GithubContext } from '../context/context';
// style
import { SearchStyle, ErrorStyle } from './styles/SearchStyle';

const Search = () => {
  const [user, setUser] = useState('');
  const { requests, error, searchGithubUser, isLoading } = React.useContext(GithubContext);

  // get things from global context
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      searchGithubUser(user);
    }
    //
  };
  return (
    <section className="section">
      <SearchStyle className="section-center">
        {error.show && (
          <ErrorStyle>
            <p>{error.msg}</p>
          </ErrorStyle>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter github user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && !isLoading && <button type="submit">search</button>}
          </div>
        </form>
        <h3>requests : {requests} / 60</h3>
      </SearchStyle>
    </section>
  );
};

export default Search;
