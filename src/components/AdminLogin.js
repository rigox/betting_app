import React  from 'react';
import axios from 'axios';
import {Link,Redirect}  from 'react-router-dom';
import Cookies from '../api/cookies';

axios.defaults.baseURL ="http://localhost:4000";

class  Login extends React.Component {

constructor(props){
        super(props)
        this.state={redirect:false,email:'',password:''}

    }

LogIn=()=>{
   axios.post('/Contract/login',{
       email:this.state.email,
       password:this.state.password
   }).then(res=>{
 Cookies.set('password',res.data.token,{expires:1})
 console.log(Cookies.get('password'))
 this.props.history.push("/Admin");
}).catch(err=> console.log("err"))
}

changeHandler=e=>{
    var name =  e.target.name;
    var value =  e.target.value;      
    console.log(name)    
    this.setState({
                   [name]:value
              })

    
}

  render(){
      return(
          <div className="ui grid container centered" style={{marginTop:"150px"}}> 
          <div className="ui middle aligned center aligned grid">
                <div className="column">
                <h2>
                  <div className="Content">
                            Admin Login Power To you!
                  </div>
                  </h2>
                  <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                              <div className="ui left icon input">
                              <i class="user icon"></i>
                            <input type="text" name="email" placeholder="Enter Emai" onChange={this.changeHandler} ></input>
                              </div>
                            </div>
                            <div className="field">
                             <div className="ui left icon input">
                             <i class="lock icon"></i>
                            <input type="password" name="password" onChange={this.changeHandler}/>
                             </div>
                            </div>
                            <div class="ui fluid large teal submit button" onClick={this.LogIn}>Login</div>
                        </div>
                        <div class="ui error message"></div>

                  </form>
                </div>

          </div>
        </div>
      )
      }
}





export default Login;