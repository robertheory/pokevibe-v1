import React from 'react'
import './styles.css'
import API from '../../services/pokeapi'
import { pickRandom } from '../../components/utils'


import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SearchForm from '../../components/SearchForm'
import Name from '../../components/Pokedex/Name'
import Gallery from '../../components/Pokedex/Gallery'
import Description from '../../components/Pokedex/Description'
import Stats from '../../components/Pokedex/Stats'
import Types from '../../components/Pokedex/Types'
// import Moves from '../../components/Pokedex/Moves'


class Pokedex extends React.Component {

    state = {

        name: '',
        no:'',
        img:[],
        description:'',
        stats: [],
        types: [],
        // moves: []

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
        
        this.setState({ description: pickRandom(description.data.flavor_text_entries.filter(e => e.language.name === "en").map(e => e.flavor_text)
        )})

        this.setState({ stats: [...pokeData.data.stats] })

        this.setState({ types: pokeData.data.types.map(item => {
                return item.type.name
            })
        })

        // const movePath = pokeData.data.moves.map(item => {

        //     return item.move.url
            
        // })

        this.setState({ moves: pokeData.data.moves })

        // console.log(this.state.moves)

        this.setState({ img: pokeData.data.sprites})

    }

    componentDidMount(){

        this.setPokemon(1)

    }

    render() {


        return(

            <div className="pokedex">

                <Header></Header>

                <SearchForm handleSearch={this.setPokemon}></SearchForm>

                <Name name={this.state.name} no={this.state.no}></Name>

                <Gallery src={this.state.img}></Gallery>

                <Description description={this.state.description}></Description>
                
                <Stats stats={this.state.stats}></Stats>

                <Types types={this.state.types}></Types>

                {/* <Moves moves={this.state.moves}></Moves> */}

                <Footer></Footer>

            </div>

        )

    }

}

export default Pokedex