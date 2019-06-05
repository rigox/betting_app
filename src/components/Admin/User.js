import React from 'react';
import Header from './Header';
import { Grid, Image } from 'semantic-ui-react'
import axios from 'axios';
import Cookies from '../../api/cookies';
axios.defaults.baseURL ="http://localhost:4000"

class User extends React.Component{
      constructor(props){
          super(props);
          this.state ={users:props.users}
      }






 renderUsers=()=>{

    var list = this.state.users.map((user)=>{
                 return(
                       <div>
                           <h2>{user.name}</h2>
                           <li>{user.email}</li>
                           <li>{user.dateJoined}</li>
                           <li>{user.funds}</li>
                           <hr/>
                           </div>
                 )
    });
    return list;

 }     

      render(){
           return(  
            <div>
                <h1>Users</h1>
                {this.renderUsers()}
            </div>
                
           )
      }
}


export default User