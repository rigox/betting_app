import React from 'react';
import Header from './Header';
import {Form,Button,Checkbox,Grid,Image} from "semantic-ui-react";
import axios from 'axios';
axios.defaults.baseURL ="http://localhost:4000"


class Make_contract extends React.Component{
      constructor(props){
          super(props);
          this.state ={
               name:'',
               descripton:'',
               option1:'',
               option2:'',
               terms:[]
          }
      }


createContract=()=>{
    this.setState({
        terms: [ this.state.option1,this.state.option2]
           })
    
      axios.post("/Contract/create",{
          name:this.state.name,
          terms:this.state.terms,
          description: this.state.description          
      })
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))
}

onChangeHandler=(e)=>{
    var name= e.target.name;
    var value =  e.target.value; 
    this.setState({
         [name]:value
     });
}


      render(){
           return(
            <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
        
            <Grid.Row columns={1}>
              <Grid.Column>
                  <h1></h1>
              <Form>
    <Form.Field>
      <label>Enter Contract Name</label>
      <input placeholder='Contract Name' type='text' name="name" onChange={this.onChangeHandler} />
    </Form.Field>
    <Form.Field>
      <label>Enter Description</label>
      <input placeholder='Description' type='text' name="Description" onChange={this.onChangeHandler} />
    </Form.Field>
    <Form.Field>
      <label>Enter Contracts Option 1</label>
      <input placeholder='option 1' type='text' name="option1" onChange={this.onChangeHandler} />
    </Form.Field>
    <Form.Field>
      <label>Enter Contracts Optoin 2</label>
      <input placeholder='options' type='text' name="option2" onChange={this.onChangeHandler} />
    </Form.Field>
    <Button onClick={this.createContract} className="ui blue button" type='submit'>Create Contract</Button>
  </Form>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
           )
      }
}


export default Make_contract