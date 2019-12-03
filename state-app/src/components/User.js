import React from 'react'


const User = props => {

    return (
        <article className="user-card">
            <p style={{ color: props.backColor }}>Usuario {props.firstName} {props.lastName}</p>
            <p>Edad: {props.age} años</p>
            <img src={props.avatar} alt={props.firstName}></img>
        </article>
    )

}

export default User