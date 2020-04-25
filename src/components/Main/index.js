import React, { useState, useEffect } from 'react'
import './styles.css'

import pokeapi from '../../services/pokeapi'

export default function Main( props ) {

    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [types, setTypes] = useState('')
    const [stats, setStats] = useState('')
    const [base_experience, setBase_experience] = useState('')
    const [back_default, setBack_default] = useState('')
    const [back_female, setBack_female] = useState('')
    const [back_shiny, setBack_shiny] = useState('')
    const [back_shiny_female, setBack_shiny_female] = useState('')
    const [front_default, setFront_default] = useState('')
    const [front_female, setFront_female] = useState('')
    const [front_shiny, setFront_shiny] = useState('')
    const [front_shiny_female, setFront_shiny_female] = useState('')

    function setInfo(data) {

        console.log("Data: "+ data.name)

        setName(data.name)
        setId(data.id)
        setHeight(data.height)
        setTypes([...data.types].map(item => { return `${item.type.name} ` }))
        setStats([...data.stats].map(item => { return `${item.stat.name}:${item.base_stat}` }))
        setWeight(data.weight)
        setBase_experience(data.base_experience)
        setBack_default(data.sprites.back_default)
        setBack_female(data.sprites.back_female)
        setBack_shiny(data.sprites.back_shiny)
        setBack_shiny_female(data.sprites.back_shiny_female)
        setFront_default(data.sprites.front_default)
        setFront_female(data.sprites.front_female)
        setFront_shiny(data.sprites.front_shiny)
        setFront_shiny_female(data.sprites.front_shiny_female)

    }

    useEffect( () => {

        pokeapi.get(props.source).then(response => {

            setInfo(response.data)

            console.log("Response.data: " + [...response.data.stats].map(item => {

                return `${item.stat.name}-${item.base_stat} / `

            }))

        })

    }, [props.source])


    return (

        <div className="main">
            
            <div className="title">

                Name: {name}
                <br/>
                ID: {id}

            </div>

            <div className="stats">

                Base Experience: {base_experience}
                <br/>
                Weight: {weight}
                <br/>
                Height: {height}
                <br/>
                Types: {types}
                <br/>
                Stats: <br/> {stats}

            </div>

            <div className="img-container">

                {front_default ? <img src={front_default} alt="sprite" /> : '' }

                {back_default ?
                    <img src={back_default} alt="sprite" />
                : '' }

                {front_female ?
                    <img src={front_female} alt="sprite" />
                : '' }

                {back_female ?
                    <img src={back_female} alt="sprite" />
                : '' }

                {front_shiny ?
                    <img src={front_shiny} alt="sprite" />
                : '' }

                {back_shiny ?
                    <img src={back_shiny} alt="sprite" />
                : '' }

                {front_shiny_female ?
                    <img src={front_shiny_female} alt="sprite" />
                : '' }

                {back_shiny_female ?
                    <img src={back_shiny_female} alt="sprite" />
                    :
                    ''
                }

            </div>


        </div>

    )


}