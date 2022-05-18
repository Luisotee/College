import "./App.css";
import { enviarValidar } from "./enviarValidar";
import { useState } from "react";
import { HeaderC } from "./HeaderComponent";
import Relogio from "./Relogio";
import { Exibir } from "./Exibir";

function App() {
  const [clientes, setClientes] = useState([]);
  const [Name, setName] = useState([]);
  let novo = { nome: "nome", telefone: "telefone" };

  //setClientes([...clientes, novo]); está dando erro "too many re-renders, não consegui arrumar"

  function changeName(e) {
    setName(e.target.value);
    setClientes([...clientes, novo]);
  }

  return (
    <>
      <HeaderC />
      <Relogio data={new Date()} pais="Brasil" />
      <form onSubmit={enviarValidar}>
        <label>
          Nome:
          <input
            type="text"
            id="Name"
            placeholder="Name"
            value={Name}
            onChange={changeName}
          />
        </label>
        <label>
          <br />
          Endereço:
          <input type="text" id="Address" />
        </label>
        <label>
          <br />
          Cidade:
          <input type="text" id="City" />
        </label>
        <label>
          <br />
          Estado:
          <input type="text" id="State" />
        </label>
        <label>
          <br />
          Numero de telefone:
          <input type="text" id="CellphoneNumber" />
        </label>
        <br></br>
        <input type="submit" value="Enviar"></input>
      </form>
      <Exibir conteudo={clientes} />
    </>
  );
}
export default App;
