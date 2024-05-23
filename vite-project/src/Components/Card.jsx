import React from 'react';

function Card({ title, author }) {
    return (
        <div>
            <h3>Datos del libro ingresados:</h3>
            <p>Título del libro: {title}</p>
            <p>Nombre del autor: {author}</p>
        </div>
    );
}

export default Card;