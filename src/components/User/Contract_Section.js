import React from 'react';
import Contract from './Contract'

class Contract_Section extends React.Component{
      constructor(props){
           super(props);
           this.state={contracts:props.contracts}
           console.log(this.state)
      }

  componentWillMount(){
  }

  renderContracts(){
   var  contracts =  this.state.contracts
   var list =  contracts.map((c)=>{
         return <Contract contract={c}/>
   })

   return list
  }    


    render(){
         return(<div>
               {this.renderContracts()}
         </div>)
    }  

}


export default Contract_Section;