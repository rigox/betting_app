import React  from  'react';
import { thisTypeAnnotation } from '@babel/types';
import axios from 'axios';

axios.defaults.baseURL ="http://localhost:4000"

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
           name:this.state.name,
           email:this.state.email,
           password:this.state.password,
           funds:this.state.funds,
           dateJoined:this.state.dateJoined
      }).then(res=>{console.log(res)})
      .catch(err=>{console.log(err)})

}

changeHandler=e=>{
     var name =  e.target.name;
     var value =  e.target.value;          
     this.setState({
                    [name]:value
               })

     
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
                            <form className="ui large form" method="post" >
                                  <div className="ui stacked segment">
                                  <div className="field">
                                       <div className="ui left icon input">
                                       <i class="user icon"></i>
                                      <input type="text" name="name" placeholder="Enter your name" onChange={this.changeHandler} />
                                       </div>
                                      </div>

                                      <div className="field">
                                        <div className="ui left icon input">
                                        <i class="user icon"></i>
                                      <input type="text" name="email" placeholder="Enter Emai" onChange={this.changeHandler} />
                                        </div>
                                      </div>
                                      <div className="field">
                                       <div className="ui left icon input">
                                       <i class="lock icon"></i>
                                      <input type="password" name="password" placeholder="Enter Password" onChange={this.changeHandler}/>
                                       </div>
                                      </div>
                                      <div className="field">
                                       <div className="ui left icon input">
                                       <i class="lock icon"></i>
                                      <input type="password" name="password2" placeholder="Confirm Password" onChange={this.changeHandler}  />
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