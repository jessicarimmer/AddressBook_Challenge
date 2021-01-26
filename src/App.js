import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

import React from 'react'
class App extends React.Component {
  state={
    phoneNumbers: [],
    inputText: ""
  }
  handleChange=(event) => {
    this.setState({inputText: event.target.value})
    console.log(this.state.inputText)
  }
  handleSubmit=(event) => {
    event.preventDefault();
    this.setState({
      phoneNumbers: [...this.state.phoneNumbers,this.state.inputText],
      inputText: "",
    }); 
  };
  render() {
    return (
        <div className="container">
          <h1>Phone Book</h1>
          <h2>Type number to save</h2>
          <form onSubmit={this.handleSubmit}> 
          <input type="text" value={this.state.inputText} onChange={this.handleChange}/>
          {this.state.phoneNumbers.map((numbers) => {
            return(
              <h1>{numbers}</h1>
            )
          })} 
          </form> 
        </div> 
    )
  }
}

export default App;