import React from 'react'
import './styles.css'
import API from '../../services/pokeapi'


import SearchForm from '../../components/Pokedex/SearchForm'
import Name from '../../components/Pokedex/Name'
import Gallery from '../../components/Pokedex/Gallery'
import Description from '../../components/Pokedex/Description'
import Stats from '../../components/Pokedex/Stats'
import Types from '../../components/Pokedex/Types'
import Moves from '../../components/Pokedex/Moves'

class Pokedex extends React.Component {

    state = {

        name: 'Bulbasaur',
        no:'1',
        img:[
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        ],
        description:'For some time after its birth, it grows by gaining nourishment from the seed on its back.',
        stats: [],
        types: ['Poison', 'Grass'],
        moves: [

            {

                'name': 'Razor-Wind',
                'accuracy': 100,
                'power': 10,
                'pp': 10,
                'type': 'Normal',
                'learn': 'LVL0'

            }

        ]

    }

    setPokemon = async (pokemon) => {

        const pokeData = await API.get(`/pokemon/${pokemon}`, (response) => {

            return response
            
        })
        
        this.setState({ name: pokeData.data.name })
        this.setState({ no: pokeData.data.id})

        const description = await API.get(`pokemon-species/${pokeData.data.id}/`, (response) => {

            return response
            
        })
        
        this.setState({ description: description.data.flavor_text_entries[1].flavor_text })

        this.setState({ stats: [...pokeData.data.stats] })
        // console.log(this.state.stats)

        // this.setState({})
        // this.setState({})
        // this.setState({})

        // this.setState({ name:newName.data.name })
    }

    render() {

        return(

            <div className="pokedex">

                <SearchForm handleSearch={this.setPokemon}></SearchForm>

                <Name name={this.state.name} no={this.state.no}></Name>

                <Gallery src={this.state.img}></Gallery>

                <Description description={this.state.description}></Description>
                
                <Stats stats={this.state.stats}></Stats>

                <Types types={this.state.types}></Types>

                <Moves moves={this.state.moves}></Moves>

            </div>

        )

    }

}

export default Pokedex