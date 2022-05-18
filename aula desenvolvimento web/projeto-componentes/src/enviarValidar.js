import "./App";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import React from "react";
//import { useState } from "react";

export function enviarValidar({ e }) {
  let name = document.getElementById("Name");
  let address = document.getElementById("Address");
  let city = document.getElementById("City");
  let state = document.getElementById("State");
  let cellphoneNumber = document.getElementById("CellphoneNumber");

  toast.configure()

  if (
    name.value === "" ||
    address.value === "" ||
    city.value === "" ||
    state.value === "" ||
    cellphoneNumber.value === ""
  )
    toast.error("Erro. Campo não pode estar vazio");
    
    else toast.success ("Usuario cadastrado")
 
}

export function changeName(e) {
  //setName(e.target.value);
}

/*export function clienteSet({ setClientes, clientes }) {
  let novo = { nome: "Luis", telefone: "15991306053" };
  setClientes([...clientes, novo]);
}*/
