import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Content.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h1 className="App-title">Aqui va el contenido</h1>
        </header>
      </div>
    );
  }
}

export default Content;
