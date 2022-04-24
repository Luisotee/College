import React from "react";
export default function Relogio(props){
const elRelogio= (
<div className='container'>
<h2> Agora no {props.pais} é {props.data.toLocaleTimeString() }</h2><h2> em {props.data.toLocaleDateString() } </h2>
</div>
)
return elRelogio; }