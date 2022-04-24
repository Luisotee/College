import { useState } from "react";
import "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function enviarValidar(e) {
  toast.configure();
  if (e.preventDefault()) alert("Dados cadastrados");
  if ((document.getElementById("Name").value === undefined))
    toast.error("Erro. Nome não pode estar vazio");
  else toast.success("Dados Cadastrados! ");
}

export function changeName(e) {
  //setName(e.target.value);
}
