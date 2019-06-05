import React from 'react';
import Header from './Header';
import ModalWindow from './Modal';

class Contract extends React.Component{
      constructor(props){
          super(props);
          this.state ={
              contracts:props.contracts,
              open:false
          }


      }

 modalHelper=()=>{
       this.setState({open:true})
 }

    //function to render list of contracts

    renderContracts(){
          var contracts  = this.state.contracts;
          var list =    contracts.map((a,index)=>{
                    return(
                         <div className="row centered" key={index}>
                           <h2>{a.contract_name}</h2>
                           {a.terms.map((s)=>{return <li>{s.name}:{s.count}</li>})}
                           <hr />
                           <li>{a.description}</li>
                           <li>Money Pool: {a.money_pool}</li>
                           <li>Date Created: {a.dateCreated}</li>
                          <li>{a._id}</li> 
                         <button className="ui red button" >Delete</button>  
                         <button onClick={()=> this.setState({open:true})}  className="ui blue button">Close Contract</button>
                        
                         </div>
                    )
        });

        return list
    }
      

    componentDidMount(){
                this.renderContracts()
    }


    


      render(){
           return(
            <div className="Centered">
                <h1>Contracts</h1>
                {
                    this.renderContracts(this.modalHelper)
                }
             <ModalWindow  open={this.state.open} />
            </div>

            )
      }
}


export default Contract



