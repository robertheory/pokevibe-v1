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

        name: '',
        no:'',
        img:[
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        ],
        description:'',
        stats: [],
        types: [],
        moves: []

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
        
        this.setState({ description: description.data.flavor_text_entries.map(text => (
            text.language.name === 'en' ? text.flavor_text : ''
            ))[1] 
        })

        this.setState({ stats: [...pokeData.data.stats] })

        this.setState({ types: pokeData.data.types.map(item => {
                return item.type.name
            })
        })

        const movePath = pokeData.data.moves.map(item => {

            return item.move.url.split('https://pokeapi.co/api/v2/')[1]
            
        })

        this.setState({ moves: movePath})

        // console.log(movesData)

        // this.setState({})

        // this.setState({ name:newName.data.name })
    }

    componentDidMount(){

        this.setPokemon(1)

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