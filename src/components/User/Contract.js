import React  from 'react';
import UserModal from './UserModal';



class Contract extends React.Component{
     constructor(props){
          super(props)
          this.state={
             open:false,
             contract_name:props.contract.contract_name,
             description:props.contract.description,
             money_pool:props.contract.money_pool,
             dateCreated:props.contract.dateCreated,
             terms:props.contract.terms,
             _id:props.contract._id
          }
     }


     onClickHandler=()=>{
            this.setState()
     }

   

     render(){
          return(
             <div className="row centered" >
                           <h2>{this.state.contract_name}</h2>
                           <li>{this.state.description}</li>
                           <li>Money Pool: {this.state.money_pool}</li>
                           <li>Date Created: {this.state.dateCreated}</li>
                           <li>Contract ID:{this.state._id}</li>
                           <hr/>
                           {this.state.terms.map((s)=>{return <li>{s.name}:{s.count}</li>})}
                         <button onClick={()=>{this.setState({open:true})}}  className="ui small blue button">Join Contract</button>
                         <UserModal  ID={this.state._id} terms={this.state.terms} open={this.state.open}/>
                         </div>
          )
     }
}




export default Contract;