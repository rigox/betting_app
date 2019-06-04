import React from 'react';
import Header from './Header';
import Contract from './Contract';
import User from './User';
import Make_contracts from './Make_contract';


class Admin extends React.Component{
     constructor(props){
          super(props)
          this.state={comp:''}
     }

 helper=(e)=>{
     this.setState({comp:e.target.name})
     console.log(this.state)
}  

renderComponent=()=>{
     var temp = this.state.comp;
     if(temp=="Contracts"){
           return <Contract />
     }
     if(temp=="Users"){
           return <User/>
     }
     if(temp=="Make_contracts"){
           return <Make_contracts />
     }
}

     render(){
          return(
               <div>
               <div class="ui three item menu">
               <a  onClick={this.helper} class="active item" name="Contracts">Contracts</a>
               <a onClick={this.helper} class="item" name="Users">View User</a>
               <a  onClick={this.helper}class="item" name="Make_contracts">Make Contract</a>
             </div>    
                    <div>
                         {this.renderComponent()}
                    </div>

             </div>

             
            )
     }
}

export default Admin;