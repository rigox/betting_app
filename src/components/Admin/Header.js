import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
       super(props)
       this.state={
             helper: props.fn
       }
    this.state.helper("a")
    }
 


    render(){
    return
}
}


export default Header;