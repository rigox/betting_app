import React from 'react';
import Login from './Login';
import Register from './Register';
import AdminLogin  from './AdminLogin';
import Admin from './Admin/Admin';
import User from './Admin/User';
import Contract from './Admin/Contract';
import Make_contract from './Admin/Make_contract'
import {BrowserRouter,Link,Route} from 'react-router-dom';


class App extends  React.Component{
      state  = {};

        render(){
             return(

                    <BrowserRouter>
                    <div className="">
                    <Route path="/"  exact component={Login} />
                    <Route path="/Register" exact  component={Register} />
                    <Route path="/AdminLogin" exact  component={AdminLogin} />
                    <Route path="/Admin" exact component={Admin} />
                    <Route path="/Users" exact  component={User} />   
                    <Route path="/Make_contract" exact  component={Make_contract} />   
                    <Route path="/Contracts" exact  component={Contract} />   
                    </div> 
                    </BrowserRouter>
             )
        }


}


export default  App;
