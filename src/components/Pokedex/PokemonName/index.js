import React, { useState, useEffect } from 'react'

export default function PokedexResult(props) {

    return(

        <div className="pokemon-name screen">

            <div>{props.name}</div>
            <span className="name-no">no. {props.id}</span>

        </div>

    )

}