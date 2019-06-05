import React from 'react';
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
   
    this.setState({open:false})
    console.log(this.state)
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
    <Button onClick={this.closeContract} type='submit'>Submit</Button>
  </Form>


    </Modal.Content>
  </Modal>
  )
}
}


export default ModalWindow;