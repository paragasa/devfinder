import React, { useState, useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from '../Layouts/NavBar';
import Search from '../Users/Search';
import Alert from '../Layouts/Alert';

import Users from '../Users/Users';
import User from '../Users/User';

import About from '../pages/About'

import axios from 'axios';

import GithubState from '../../context/github/githubState';
import './App.css';
import { async } from 'q';

const App = () => {


  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlertState] = useState(null);

 
  // const init = async() => { 
  //   setLoading(true);
  //   const res = await axios.get( `https://api.github.com/users?client_id=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   setUsers(res.data)
  //   setLoading(false);
      
  // };

  // useEffect(() =>init(),[]);


  //Search for users
  const searchUsers= async(text) => {

    setLoading(true);

    const res = await axios.get( `https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUsers(res.data.items);
    setLoading(false);
    
  }
  //GET USER
  const getUser = async(username) => {
    setLoading(true);

    const res = await axios.get( `https://api.github.com/users/${username}?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUser(res.data);
    setLoading(false);
  }

  //GET User Repo
  const getRepos = async(username) => {
    setLoading(true);

    const res = await axios.get( `https://api.github.com/users/${username}/repos?per_page=6&sort-created:asc&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data);
    setLoading(false);
  }

 //clear users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  const setAlert = (msg, type) => {
    setAlertState({msg, type})
    setTimeout(() => {
      setAlertState(null);
    }, 5000);
  }

  return (
    <GithubState>
    <Router>
      <div className='App'>
      <NavBar />
      <div className="container">
        <Alert alert={alert}/>
        <Switch>
          <Route exact path='/'
            render={props=>(
              <Fragment>
                <Search 
                searchUsers={searchUsers} 
                clearUsers={clearUsers}
                showClear={users.length > 0 ? true: false}
                setAlert={setAlert}
              />
              <Users loading={loading} users={users} />
              </Fragment>
            )}
          />
          <Route 
            exact path='/about' 
            component={About}
          />

          <Route
            exact path='/user/:login'
            render={props => (
              <User {...props}
                user={user}
                repos={repos}
                getUser={getUser} 
                getRepos={getRepos}
                loading={loading} />
            )}
            />
        </Switch>
      </div>
    </div>
    </Router>
    </GithubState>
  ); 
};

export default App;
