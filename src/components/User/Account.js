import React from 'react';
import Add_Funds  from './Add_Funds';
import Cookies from '../../api/cookies';
class Account extends React.Component{
     constructor(props){
          super(props)
          this.state={user:props.user,open:false,email:Cookies.get('email')}
     }

renderPositions=()=>{
      var  positions  = this.state.user.positions;
       if(positions.length>0){
           var list =  positions.map((a)=>{
                 return <div className="item">{a.choice}</div>
           })

           return list
       }
  return "Not participating in anuy contracts at the  moment"
}





     render(){
         return(
                   <div className="ui centered middle align grid">
                                    <h1>Account</h1>
                       <div className="row">
                       <div className="ui list">
                               <div className="ui large label">
                               User Email
                                <div className="item">
                                    {this.state.user.email}
                                </div>
                                </div>
                                <div className="ui large label">
                                Funds Available
                                <div className="item">
                                    ${this.state.user.funds}
                                </div>
                                </div>
                                <div className="item" style={{marginBottom:'15spx'}}>
                                    <button onClick={()=>{this.setState({open:true})}} className="ui small blue button">add Funds</button>
                                </div>
                                <div class="ui inverted  divider"></div>
                                <div className="item">
                                    {this.renderPositions()}
                                </div>
                                <Add_Funds email={this.state.email} open={this.state.open}/>
                                </div>
                      </div>             
                   </div>
         )
     }

}

export default Account;