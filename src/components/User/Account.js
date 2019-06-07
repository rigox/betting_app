import React from 'react';
import UpdateEmail  from './Update_email_Modal';
import Add_Funds  from './Add_Funds';
import Cookies from '../../api/cookies';
import {Redirect}  from 'react-router-dom';

class Account extends React.Component{
     constructor(props){
          super(props)
          this.state={user:props.user,open:false,email:Cookies.get('email'),open_email:false,open_funds:false,logout:false}
          console.log("HERE", this.state )
     }

renderPositions=()=>{
      var  positions  = this.state.user.positions;
       if(positions.length>0){
           var list =  positions.map((a)=>{
                 return <div className="item">ID: {a.contract_id} | Choice:{a.choice} | Amount:{a.amount} </div>
           })
           return list
       }
  return "Not participating in anuy contracts at the  moment"
}







     render(){
         if(this.state.logout){
              return <Redirect  to="/"/>
         }
         return(
                   <div className="ui centered middle align grid">
                                    <h1>Account Settings</h1>
                       <div className="row">
                       <div className="ui list">
                               <div className="ui large label">
                               User Email
                                <div className="item">
                                    {this.state.email}
                                </div>
                                </div>
                                <div className="ui large label">
                                Funds Available
                                <div className="item">
                                    ${this.state.user.funds}
                                </div>
                                </div>
                                <div className="item" style={{marginBottom:'15spx'}}>
                                    <button onClick={()=>{this.setState({open_funds:true})}} className="ui small blue button">add Funds</button>
                                    <button onClick={()=>{this.setState({open_email:true})}} className="ui small green button">Change Email</button>
                                    <button onClick={()=>{this.setState({logout:true})}} className="ui small red button">Logout</button>

                                </div>
                                <div class="ui inverted  divider"></div>
                                <div className="item">
                                   <h2>Positions</h2>
                                    {this.renderPositions()}
                                </div>
                                <Add_Funds email={this.state.email} open={this.state.open_funds}/>
                                <UpdateEmail email={this.state.email} open={this.state.open_email} />

                                </div>
                      </div>             
                   </div>
         )
     }

}

export default Account;