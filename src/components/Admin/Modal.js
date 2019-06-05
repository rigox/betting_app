import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

class ModalWindow extends React.Component{

 constructor(props){
      super(props);
      this.state={
          open:props.open
      }
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
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Make Sure to Enter Correct Contract ID</Header>
      </Modal.Description>
      <input   type="text" name="_id"/>
      <button onClick={this.closeContract} >Close Contract</button>
    </Modal.Content>
  </Modal>
  )
}
}


export default ModalWindow;