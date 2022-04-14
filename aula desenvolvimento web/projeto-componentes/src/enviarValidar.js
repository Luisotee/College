import {useState} from 'react';
import './App';

export function enviarValidar(e) {
    e.preventDefault()
    alert("Dados cadastrados")
}

export function changeName(e){
    setName(e.target.value); 
}
