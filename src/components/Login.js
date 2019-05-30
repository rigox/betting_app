import React  from 'react';
import Axios from 'axios';
import {Link,Redirect}  from 'react-router-dom';

class  Login extends React.Component {
    constructor(props){
        super(props)
        this.state={redirect:false}

    }

LogIn=()=>{
}

RedirectToRegister=()=>{

    


}

  render(){
      return(
          <div className="ui grid container centered" style={{marginTop:"180px"}}> 
          <div className="ui middle aligned center aligned grid">
                <div className="column">
                <h2>
                  <div className="Content">
                            Welcome To Bety:)
                  </div>
                  </h2>
                  <form className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                              <div className="ui left icon input">
                              <i class="user icon"></i>
                            <input type="text" name="email" placeholder="Enter Emai"></input>
                              </div>
                            </div>
                            <div className="field">
                             <div className="ui left icon input">
                             <i class="lock icon"></i>
                            <input type="password" name="password"/>
                             </div>
                            </div>
                            <div class="ui fluid large teal submit button">Login</div>
                            <Link to="/Register" style={{marginTop:'12px'}} className="ui fluid large blue submit button"> Register</Link>
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