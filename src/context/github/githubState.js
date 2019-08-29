import  React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {SEARCH_USERS, SET_LOADING,CLEAR_USERS, GET_USER, GET_REPOS} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        users: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //search users

    //get user

    //clear user
    
    //get repos

    //set loading

    return <GithubContext.Provider
        value={{
            users:state.users,
            user: state.user,
            repo: state.repos,
            loading: state.loading,
        }}
        >
        {props.children}
    </GithubContext.Provider>
}
export default GithubState;