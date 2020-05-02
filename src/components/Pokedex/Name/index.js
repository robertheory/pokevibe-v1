import React from 'react'
import { titleLeize } from '../../utils'

export default function Name (props) {

    return(

        <div className="name marble">

            {titleLeize(props.name)}

            <div className="number">no. {props.no}</div>

        </div>

    )

}