import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const propTypes = {
    repos: PropTypes.array.isRequired,
};


const Repos = ({repos}) => {
    return (
       repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)
    );
};


Repos.propTypes = propTypes;


export default Repos;
