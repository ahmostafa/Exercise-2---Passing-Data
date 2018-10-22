import React, { Component } from 'react';

class UsersList extends Component{
 usersList = this.props.usersList;
  render(){
    if(this.usersList.length===0)
   	return (
   	<div>	 
      <p>None of the current users liked this movie</p>
    </div> 
    )
    else
    	return (
    <div>
    			<p>Liked By:</p>	
    			<ul>
    				{this.usersList.map((user)=>(
                    	<li key={user.id}>{user.name}</li>
                    ))}
    			</ul>
    </div>
    )
  
  }
}


export default UsersList;