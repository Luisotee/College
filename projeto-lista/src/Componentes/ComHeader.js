import React from 'react';
import ReactDOM from 'react-dom';

let array = [2, 2, 4, 4]
let filaEntrega = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue
)

export default class ComHeader extends React.Component {
    render(){
        return(
            console.log('a')
        )
    }
}