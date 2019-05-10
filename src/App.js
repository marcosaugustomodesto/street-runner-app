import React, { Component } from 'react';
import './App.css';
import './InputList/InputList'
import InputList from './InputList/InputList';
import InputListDetail from './InputListDetail/InputListDetail';

class App extends Component {

  state = {
    params: { 'tipo': '', 'velocidade': '', 'minutos': '', 'repeticoes': '', 'metros': '' },
    listaAtividades: [],
    dadosValidos: false
  }

  inputChangedHandler = (event) => {
    const initialParams = this.state.params;
    initialParams[event.target.id] = event.target.value;
    this.setState({ params: initialParams });
    
    const initialNovoParams = {};    
    const validateInitialParams = false;
    Object.assign(initialNovoParams,this.state.params);
    Object.assign(validateInitialParams,this.state.dadosValidos);

    if(isNaN(initialNovoParams.velocidade) ||
      isNaN(initialNovoParams.minutos) ||
      isNaN(initialNovoParams.repeticoes) ||
      isNaN(initialNovoParams.metros)){
      this.setState({ dadosValidos: false });
    } else {
      this.setState({ dadosValidos: true });
    }
  }

  addRecordHandler = (event) => {
    event.preventDefault();

    const teste = false;
    Object.assign(teste, this.state.dadosValidos);

    if (teste) {
      const newLista = [...this.state.listaAtividades];
      const newParam = {};
      Object.assign(newParam, this.state.params);
      newLista.push(newParam);
      this.setState({ listaAtividades: newLista });
      alert('Registro inserido com sucesso!');
    } else {
      alert('Dados inválidos!');
    }
  }

  render() {

    const listaAtividadesShow = this.state.listaAtividades.map((input, index) => {
      return <InputListDetail input={input} key={index} />;
    });

    return (
      <div className="App">
        <InputList
          changed={this.inputChangedHandler}
          addRecord={this.addRecordHandler}
          value={this.state.params}>
        </InputList>
        {listaAtividadesShow}
      </div>
    );
  }
}

export default App;
