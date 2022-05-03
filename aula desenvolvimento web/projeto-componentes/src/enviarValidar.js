import { useState } from "react";
import "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function enviarValidar(e) {
  let name = document.getElementById("name")
  let address = document.getElementById('address')
  let city = document.getElementById('city')
  let state = document.getElementById('state')
  let cellphoneNumber = document.getElementById('cellphoneNumber')

  toast.configure();
  if (e.preventDefault()) alert("Dados cadastrados");
 // if (name.value  === "" || address.value  === "" || city.value  === "" || state.value === "")
   // toast.error("Erro. Campo não pode estar vazio");
  else toast.success("Dados Cadastrados! ");
}

export function changeName(e) {
  //setName(e.target.value);
}
