import React from 'react';
import Contract_Section from './Contract_Section';
import  Account from './Account';
import  Cookies from '../../api/cookies';
import axios from 'axios';
axios.defaults.baseURL ="http://localhost:4000";



class Dashboard extends React.Component{
     constructor(props){
          super(props)
          this.state={
                comp:"",
                open:false
          }
     }

componentDidMount(){
    var config  ={headers:{'Authorization':'Bearer '+Cookies.get("password")}}
    axios.get('Contract/fetch_contracts',config)
   .then(res=>console.log(this.setState({contracts:res.data})))
   .catch(err=>console.log(err))

    axios.get("/User/get_user",{
    params:{
        email:Cookies.get("email")
    }})
    .then(res=>{this.setState({user:res.data})})
    .catch(err=>console.log((err)))
}

renderComponent=()=>{
    var temp  = this.state.comp
     
    if(temp=="Contracts"){
          return <Contract_Section  contracts={this.state.contracts}/>
    }
    if(temp=="Account"){
          return <Account user={this.state.user}/>
    }
}

helper=(e)=>{
  this.setState({comp:e.target.name})
}


     render(){
          return(
               <div>
                     <div class="ui three item menu">
                     <a  onClick={this.helper} class="active item" name="Contracts">Contracts</a>
                     <a onClick={this.helper} class="item" name="Account">Account</a>
                     </div>   
                     {this.renderComponent()} 
               </div>
          )
     }
}


export default Dashboard;