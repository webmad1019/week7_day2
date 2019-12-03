import React from 'react';

import './styles/movie.css'

const movieCard = props => {


    return (
        <article className="col-md-4 movie">
            <h4>{props.title}</h4>
            <p>Director: {props.director}</p>

            {/* props.oscar ? <p>¡Tiene Oscar!</p> : <p>ops! Looser total</p> */}
            {props.oscar && <p>¡Tiene Oscar!</p>}
            {!props.oscar && <p>ops! Looser total</p>}

            <button onClick={props.deleteMovie} className="btn btn-sm btn-dark">Eliminar película</button>
        </article>
    )
};

export default movieCard