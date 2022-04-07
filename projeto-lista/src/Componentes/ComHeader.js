import React from 'react';
import ReactDOM from 'react-dom';

let array = [2, 2, 4, 4]
let filaEntrega = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue
)

class ComHeader extends React.Component {
    render() {
        return(
            <div>
                Olá {this.props.nome}
            </div>
        );
    }    
}

export default ComHeader