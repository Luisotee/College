import "./App.css";
import { enviarValidar } from "./enviarValidar";
import { useState } from "react";
//import { HeaderC } from "./HeaderComponent";

function App() {
  const [Name, setName] = useState();
  function changeName(e) {
    setName(e.target.value);
  }
  return (
    <form onSubmit={enviarValidar}>
      <label>
        Nome:
        <input type="text" placeholder="Nome" value={Name} onChange={changeName} />
      </label>
      <label>
        <br />
        Endereço:
        <input type="text" className="Address" />
      </label>
      <label>
        <br />
        Cidade:
        <input type="text" className="City" />
      </label>
      <label>
        <br />
        Estado:
        <input type="text" className="State" />
      </label>
      <label>
        <br />
        Numero de telefone:
        <input type="text" className="CellphoneNumber" />
      </label>
      <br></br>
      <input type="submit" value="Enviar"></input>
    </form>
  );
}

export default App;
