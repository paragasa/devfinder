import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//import { Test } from './User.styles';
import Repos from '../../Repos/Repos';
import spinner from '../../Layouts/Spinner';

const User = ({props: { user , loading, getUser, getRepos, repos, match }}) => {

  useEffect(() => {
    getUser(match.params.login); 
    getRepos(match.params.login);
  }, []); //component mounting

    //pull from props user info
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      company,
      followers,
      following,
      public_repos,
      pbulic_gists, 
      hireable
    }= user;
   
    if(loading){return spinner;}
    
    return(
      <Fragment>
        <Link to="/" className="btn btn-light"><i className="fa fa-long-arrow-alt-left "></i>Go back</Link>
        Looking for Work: {' '}
        {hireable ? (<i className="fa fa-check-square text-success"></i>): (<i className="fa fa-times-circle text-danger"></i>)}

        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} alt="avatarurl" className="round-img" style={{width : "150px"}}/>
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
            <ul>
              <li>
                {login && 
                  <Fragment>
                    <strong> Username: </strong>{login}
                  </Fragment>
                }
              </li>
              <li>
                {company && 
                  <Fragment>
                    <strong> Company:</strong> {company}
                  </Fragment>
                }
              </li>
              <li>
                {blog && 
                  <Fragment>
                    <strong> Website:</strong> {blog}
                  </Fragment>
                }
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-danger">
            Followers: {followers}
          </div>
          <div className="badge badge-primary">
            Following: {following}
          </div>
          <div className="badge badge-dark">
            Public Repos: {public_repos}
          </div>
          <div className="badge badge-light">
            Gists: {pbulic_gists}
          </div>
        </div>
        <Repos repos={repos}/> 
      </Fragment>
    );
  
}

User.propTypes = {
  // bla: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
};

User.defaultProps = {
  // bla: 'test',
};

export default User;
