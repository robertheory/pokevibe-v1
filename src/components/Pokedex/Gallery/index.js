import React, { useState } from 'react'
import { normalizeNameDisplay } from '../../../components/utils'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export default function (props) {

    const imgType = ['front_default', 'back_default', 'front_female', 'back_female', 'front_shiny', 'back_shiny', 'front_shiny_female', 'back_shiny_female']

    const [imgIndex, setImgIndex] = useState(0)

    function next(n) {

        n >= 7 ? n = 0 : n++
        setImgIndex(n)

    }

    function previous(n) {

        n <= 0 ? n = 7 : n--
        setImgIndex(n)

    }

    function getImg(){

        return props.src[imgType[imgIndex]] === null ? next(imgIndex) : props.src[imgType[imgIndex]]

    }

    return (

        <div className="gallery">

            <div className="img-container">

                <FiArrowLeft onClick={() => previous(imgIndex)}></FiArrowLeft>

                <img src={ getImg() } alt="" className="pokemon-img" />
                
                <FiArrowRight onClick={() => next(imgIndex)}></FiArrowRight>

            </div>


            <p className="sub">{ normalizeNameDisplay(imgType[imgIndex]) }</p>

        </div>

    )

}