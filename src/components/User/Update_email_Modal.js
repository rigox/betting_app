import React from 'react';
import  {Modal,Button,Form,Header} from 'semantic-ui-react';
import  Cookies from '../../api/cookies';
import axios from 'axios';
axios.defaults.baseURL ="http://localhost:4000";


class UpdateEmail  extends React.Component{
    constructor(props){
            super(props)
            this.state={open:props.open,email:props.email,value:""}
    }

 closeModal=()=>{
    var config = {headers:{'Authorization':"Bearer "+ Cookies.get("password")}}
    
    axios.put('User/update_email',{
          email:Cookies.get("email"),
          newEmail:this.state.value

    },config)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    this.setState({open:false})
 }   

 componentWillReceiveProps(nextProps,prevProps){
  if(nextProps.open!=prevProps.open){
       this.setState({open:nextProps.open})
  }
 }

 changeHandler=(e)=>{
     const temp =  e.target.value
     this.setState({value:temp})
     console.log(Cookies.get('email'))
 }

 cancel=(e)=>{
    this.setState({open:false})

}

    render(){
         return(
            <Modal open={this.state.open}>
            <Modal.Header>Update Account email</Modal.Header>
            <Modal.Content>
            <Form>
            <Form.Field>
            <label>How Much will you like  to bet</label>
            <input placeholder='Enter  New Email' onChange={this.changeHandler} className="small" type="text" name="value"  />
            </Form.Field>
            <Button  className="ui blue button" onClick={this.closeModal} type='submit'>Update Email</Button>
            <Button  className="ui red button" onClick={this.cancel} type='submit'>Cancel</Button>

        </Form>
            </Modal.Content>
        </Modal>
         )
    }
}



export default UpdateEmail;