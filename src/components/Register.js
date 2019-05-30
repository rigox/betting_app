import React  from  'react';
const  axios  = require("../api/api");

class Register extends React.Component{ 
      
  constructor(props){
       super(props)
       this.state  ={
            name:'',
            email:'',
            password:'',
            funds:0,
            dateJoined:new Date().toUTCString()

       }
             }

 RegisterUser = ()=>{
     axios.post('/User/make_user',{
          name
     });

}

     render(){
                  return(

                    <div className="ui grid container centered" style={{marginTop:"180px"}}> 
                    <div className="ui middle aligned center aligned grid">
                          <div className="column">
                          <h2>
                            <div className="Content">
                                      Register To Bety:)
                            </div>
                            </h2>
                            <form className="ui large form">
                                  <div className="ui stacked segment">
                                  <div className="field">
                                       <div className="ui left icon input">
                                       <i class="user icon"></i>
                                      <input type="text" name="name" placeholder="Enter your name"/>
                                       </div>
                                      </div>

                                      <div className="field">
                                        <div className="ui left icon input">
                                        <i class="user icon"></i>
                                      <input type="text" name="email" placeholder="Enter Emai"></input>
                                        </div>
                                      </div>
                                      <div className="field">
                                       <div className="ui left icon input">
                                       <i class="lock icon"></i>
                                      <input type="password" name="password" placeholder="Enter Password"/>
                                       </div>
                                      </div>
                                      <div className="field">
                                       <div className="ui left icon input">
                                       <i class="lock icon"></i>
                                      <input type="password" name="password2" placeholder="Confirm Password" />
                                       </div>
                                      </div>
                                      <div onClick={this.RegisterUser} class="ui fluid large teal submit button">Register</div>
                                  </div>
                                  <div class="ui error message"></div>
          
                            </form>
                          </div>
          
                    </div>
                  </div>

                         )
             }

}


export default Register;