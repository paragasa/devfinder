import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    repo: PropTypes.object.isRequired,
};


const RepoItem = ({repo : {name , url}}) => {
    return (
        
        <div className="card">
            <a href={url}>{name}</a>
        </div>
    );
};


RepoItem.propTypes = propTypes;


export default RepoItem;
