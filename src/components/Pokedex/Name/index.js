import React from 'react'

export default function Name (props) {

    return(

        <div className="name marble">

            {props.name}

            <div className="number">no. {props.no}</div>

        </div>

    )

}