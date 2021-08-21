import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import img from './img/1.jpg'

class App extends Component{

  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.state = {isbutton: true};
  }

  show() {
    this.setState({isbutton: false});
  }
  
render () {
  const isbutton = this.state.isbutton;

  if(isbutton){

    return <button className="btn btn-primary button" type="button" onClick={this.show}>click me</button>

  }else {

    return <img id='img' src={img}/>

  }

 
 


}
}
 

export default App;
