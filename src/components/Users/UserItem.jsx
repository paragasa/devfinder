import React from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
const UsersItem = ({user : {avatar_url, login}}) => {
        return (
            <div className="card text-center">
                    <img 
                    className="round-img"
                    style={{
                        width:'6rem'
                    }} 
                    src={avatar_url} 
                    alt={login} />
                    <h3>{login}</h3>
                <div>
                    <Link 
                    className="btn btn-primary" 
                    to={`/user/${login}`}>More</Link>
                </div>
            </div>
           
        );
}
UsersItem.propTypes ={
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar_url:PropTypes.string.isRequired,
         login:PropTypes.string.isRequired,
         html_url:PropTypes.string.isRequired,
    })
}
export default UsersItem;