import React from 'react'

export default function Type(props) {

    return (

        <div className="types marble">

            <h5>Type:</h5>

            <div className="type-items">

                {props.types.map(type => (

                    <div key={type} className={`type ${type.toLowerCase()}`}>{type}</div>

                ))}

            </div>

        </div>

    )

}

