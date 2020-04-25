import React from 'react'
import './styles.css'

import pokeapi from '../../services/pokeapi'

class PokedexSearch extends React.Component {

    state = {

        pokemon: []

    }

    setPokemon = (pokemon) => {

        this.setState({ pokemon })

    }

    componentDidMount() {

        pokeapi.get('pokemon?offset=0&limit=964').then(response => {

            this.setPokemon(response.data.results)

        })

    }

    render() {

        return (

            <div className="select">

                <select name="pokelist" id="pokelist"
                    // onChange={() => setInfo(document.getElementById('pokelist').value)}
                    onChange={() => { this.props.handleSubmit(document.getElementById('pokelist').value) }}>

                    <option value="">Vazio</option>

                    {this.state.pokemon.map(poke => (

                        <option key={poke.url} value={poke.url}>{poke.name}</option>

                    ))}

                </select>

                <div className="select_arrow">
                </div>

            </div>

        )


    }


}

export default PokedexSearch