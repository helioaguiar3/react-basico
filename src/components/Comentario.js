//importa o react que esta na pasta node
import React from 'react';
import './Comentario.css';

//criar o componente escrito em JSX
const Comentario = props => {


    return (
    <div className="Comentario">
        <h2>{props.nome}</h2>
        <p>{props.email}</p>
        <div>{props.children}</div>
        <p>{props.data.toString()}</p>
    </div>
    )
};

export default Comentario;