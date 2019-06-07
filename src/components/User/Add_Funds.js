import React from 'react'
import  {Modal,Button,Form,Header} from 'semantic-ui-react';
import  Cookies from '../../api/cookies';
import axios from 'axios';
axios.defaults.baseURL ="http://localhost:4000";

class Add_Funds extends React.Component{

  constructor(props){
       super(props)
       this.state={email:props.email,open:props.open,amount:0}
  }

closeModal=()=>{
       var config = {headers:{'Authorization':"Bearer "+Cookies.get("password")}}
        axios.put("User/add_funds",{
             amount:this.state.amount,
             email:this.state.email
        },config).
        then(res=>{console.log(res)})
        .catch(err=>console.log(err))
      this.setState({open:false})
}

componentWillReceiveProps(nextProps,prevProps){
     if(nextProps.open!=prevProps.open){
           this.setState({open:nextProps.open})
     }
}

onChangeHandler=(e)=>{
  const name = e.target.name
  const value = e.target.value
  this.setState({
      [name]:value
  })
}

  render(){
        return(
            <Modal open={this.state.open}>
            <Modal.Header>Add Funds</Modal.Header>
            <Modal.Content>
            <Modal.Description>
                <Header>Adding Funds to: {this.state.email}</Header>
            </Modal.Description>
            <Form>
            <Form.Field>
            <input placeholder='Enter $ amount' onChange={this.onChangeHandler} className="small" type="text" name="amount"  />
            </Form.Field>
            <Button onClick={this.closeModal}   className="ui blue button" type='submit'>Add</Button>
        </Form>
            </Modal.Content>
        </Modal>
        )
  }

}


export default Add_Funds;