import React from 'react';
import Login from './Login';
import Register from './Register';
import {BrowserRouter,Link,Route} from 'react-router-dom';


class App extends  React.Component{
      state  = {};

        render(){
             return(

                    <BrowserRouter>
                    <div className="ui grid container">
                    <Route path="/"  exact component={Login} />
                    <Route path="/Register" exact  component={Register} />
                    </div> 
                    </BrowserRouter>
             )
        }


}


export default  App;
