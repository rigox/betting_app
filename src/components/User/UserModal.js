import React  from 'react';
import axios from 'axios';
import  {Modal,Button,Form,Header} from 'semantic-ui-react';
import Cookies from '../../api/cookies';
axios.defaults.baseURL ="http://localhost:4000";

class UserModal extends React.Component{
    
  constructor(props){
        super(props);
        this.state={
              open:false,
              terms:props.terms,
              _id:props.ID,
              value:'',
              amount:0
            }
    }
   

   closeModal=()=>{
      var config  ={headers:{'Authorization':'Bearer '+Cookies.get("password")}}
      axios.post('Contract/join_contract',{
              _id:this.state._id,
              choice:this.state.value,
              email:Cookies.get("email"),
              amount:this.state.amount
      },config)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))


      this.setState({open:false})
   } 
   
   componentWillReceiveProps(nextProps,preProps){
         if(nextProps.open!=preProps.open){
                this.setState({open:nextProps.open})
         }
   }

  changeAmount=(e)=>{
         var temp =  Number(e.target.value)
         this.setState({amount:temp})
  } 

renderOptions=()=>{
         if(this.state.terms.length>0){
            var list =  this.state.terms.map((e)=>{
                  return(
                         <Form.Radio
                            label={e.name}
                            value={e.name}
                            checked={this.state.value===e.name}
                            onChange={this.handleChange}
                         />
                  )
          })
          return list
         }
   }

   handleChange = (e, { value }) => this.setState({ value })
   cancel=(e)=>{
      this.setState({open:false})

  }

    render(){
          return(
            <Modal open={this.state.open}>
                <Modal.Header>Join Contract</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                    <Header>Make Sure to Enter Correct Contract ID</Header>
                </Modal.Description>
                <Form>
               <Form.Group inline>
                    <label>Choices</label>
                    {this.renderOptions()}
               </Form.Group>
                <Form.Field>
                <label>How Much will you like  to bet</label>
                <input placeholder='Enter $ amount' onChange={this.changeAmount} className="small" type="text" name="result"  />
                </Form.Field>
                <Button className="blue ui button" onClick={this.closeModal} type='submit'>Join</Button>
                <Button className="red ui Button" onClick={this.cancel} type='submit'>Cancel</Button>

            </Form>
                </Modal.Content>
            </Modal>
          )
    }


}


export default   UserModal;