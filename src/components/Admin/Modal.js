import React from 'react';
import Cookies from '../../api/cookies';
import { Button, Header, Image, Modal ,Form, Checkbox} from 'semantic-ui-react'
import axios from 'axios';
axios.defaults.baseURL ="http://localhost:4000";

class ModalWindow extends React.Component{

 constructor(props){
      super(props);
      this.state={
          open:props.open,
          _id:'',
          result:''
      }
 }


onChangeHandler=(e)=>{
      var name =  e.target.name;
      var value = e.target.value
      this.setState({
           [name]:value
      })
}


 componentWillReceiveProps(nextProps,prevProps){
       this.setState({open:nextProps.open})
 }

 closeContract=()=>{
    var config = {headers:{"Authorization":"Bearer " + Cookies.get("password")}}
    axios.put('Contract/close_contract',{
        result:this.state.result,
        _id:this.state._id
    },config)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    this.setState({open:false})}

cancel=()=>{
     this.setState({open:false})
}


    render(){return(
<Modal open={this.state.open}>
    <Modal.Header>Close Contract</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Make Sure to Enter Correct Contract ID</Header>
      </Modal.Description>
      <Form>
    <Form.Field>
      <label>Enter Contract ID</label>
      <input placeholder='Contract ID' type='text' name="_id" onChange={this.onChangeHandler} />
    </Form.Field>
    <Form.Field>
      <label>Enter Winner</label>
      <input placeholder='Enter Winner of Contest' type="text" name="result"  onChange={this.onChangeHandler} />
    </Form.Field>
    <Button className="ui blue button" onClick={this.closeContract} type='submit'>Close Contract</Button>
    <Button  className="ui red button" onClick={this.cancel} type='submit'>Cancel</Button>

  </Form>


    </Modal.Content>
  </Modal>
  )
}
}


export default ModalWindow;