import React from 'react';
import  axios from 'axios';
import Header from './Header';
import Contract from './Contract';
import User from './User';
import Make_contracts from './Make_contract';
import  Cookies from '../../api/cookies';
import {Redirect} from 'react-router-dom';
axios.defaults.baseURL ="http://localhost:4000";


class Admin extends React.Component{
     constructor(props){
          super(props)
          this.state={comp:''}
     }

componentDidMount(){

  const config = {headers:{"Authorization":"Bearer " + Cookies.get("password") }}
  console.log(config)
  axios.get('/Contract/fetch_contracts',config)
  .then(res=>{
    this.setState({contracts:res.data})
     console.log(res.data)
})
  .catch(err=>console.log(err))

   axios.get("User/fetch_users")
      .then(res=>this.setState({users:res.data}))
      .catch(err=>console.log(err))

}




 helper=(e)=>{
     this.setState({comp:e.target.name})
     console.log(this.state)
}  

renderComponent=()=>{
     var temp = this.state.comp;
     if(temp=="Contracts"){
           return <Contract  contracts={this.state.contracts} />
     }
     if(temp=="Users"){
           return <User  users={this.state.users}/>
     }
     if(temp=="Make_contracts"){
           return <Make_contracts />
     }
}


     render(){
          if(this.state.logout){
                return <Redirect  to="/"/>
          }
          return(
               <div>
               <div class="ui three item menu">
               <a  onClick={this.helper} class="active item" name="Contracts">Contracts</a>
               <a onClick={this.helper} class="item" name="Users">View User</a>
               <a  onClick={this.helper}class="item" name="Make_contracts">Make Contract</a>
               <button onClick={()=>{this.setState({logout:true})}} className="ui red button"></button>
             </div>    
                    <div>
                         {this.renderComponent()}
                    </div>

             </div>

             
            )
     }
}

export default Admin