import React from "react";
import ReactDOM, { render } from "react-dom";

function comHeader() {
  let array = [2, 2, 4, 4];
  let filaEntrega = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  const nomeApp = "Ifood";
  const url = "https://sisenor.com.br/wp-content/uploads/2021/03/ico-ifood.png";

  return (
    <div>
      <img src={url} className="App-logo" alt="logo" />
      <h1> {nomeApp.toUpperCase()} </h1>
      <a className="App-link" href="ifood.com.br" target="_blank">
        Facens
      </a>
      <p> Fila de espera: {filaEntrega} </p>
    </div>
  );
}

export default comHeader;
