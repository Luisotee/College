import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class ComponenteMensagem extends React.Component {
  render() {
    return (
      <div>
        Olá alunos, <p> Aula de {this.props.aula}</p> {this.props.nome} !
      </div>
    );
  }
}

export default ComponenteMensagem;