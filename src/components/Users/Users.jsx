import React, { useEffect} from 'react'
import Faker from 'faker';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Spinner from './../Layouts/Spinner';


 const Users = ({users, loading}) => {
  
    if(loading){
        return <Spinner/>
    }
    else{
        return (
            <div className="container">
                <div style={userStyle} >
                    {users.map(user=>(
                        <UserItem 
                            key={user.id}
                            user={user}
                        ></UserItem>
                ))}
            </div>
        </div>
        );
    }
    
    }

Users.propTypes={
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

    const userStyle={
        display: 'grid',
        gridTemplateColumns:'repeat(3, 1fr)',
        gridGap: '1rem'
    }
    
    
    
    export default Users;

  
    // constructor(){
    //     super();

    //     this.state ={

    //         users: this.props.users,

    //     }
    // }
    
    // componentWillMount() {
    //     // for(let i = 1; i<= 6; i++){
    //     // const user = {
    //     //     id: i,
    //     //     login: Faker.name.findName(),
    //     //     avatar_url: Faker.internet.avatar(),
    //     //     html_url: Faker.internet.url(),
    //     // }
    //     // this.state.users.push(user);

        
        
    

    // // console.log(this.state.users);
    // }
    
  

