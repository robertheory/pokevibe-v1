import React from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export default function(props) {

    return(

        <div className="gallery">

            <FiArrowLeft></FiArrowLeft>

            <img
                src={props.src}
                alt=""
                className="pokemon-img"
            />

            <FiArrowRight></FiArrowRight>

        </div>

    )

}