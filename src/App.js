import React, { Component } from 'react';
import './App.css';
import './InputList/InputList'
import InputList from './InputList/InputList';

class App extends Component {
  
  state = {
      initialParams: { 'tipo':'CA','velocidade':0,'minutos':0,'repeticoes':1,'metros':100} 
  }

  inputChangedHandler = ( event ) => {
    const initialParams = this.state.initialParams;
    initialParams[event.target.id] = event.target.value;
    this.setState({ initialParams: initialParams});
  }

  addRecordHandler = (event) => {
    event.preventDefault();
    alert('here we go!');
  }

  render() {

    return (
      <div className="App">
        <InputList 
            changed={this.inputChangedHandler} 
            addRecord={this.addRecordHandler}
            value={this.state.initialParams}>
        </InputList>
      </div>
    );
  }
}

export default App;
