import React from 'react'
import './styles.css'

import PokedexSearch from '../../components/PokedexSearch'
import PokedexResult from '../../components/PokedexResult'

// import pokeapi from '../../services/pokeapi'

class Pokedex extends React.Component {

    constructor(props) {

        super(props)
    
        this.state = {
    
            pokeInfo: 'https://pokeapi.co/api/v2/pokemon/1/'
            
        }
        
    }
    
    setPokeInfo = (pokeInfo) => {
        
        this.setState({ pokeInfo })
        
    }
    
    render() {
        
        return (
            
            <div className="main">
    
                <PokedexSearch handleSubmit={this.setPokeInfo}></PokedexSearch>
                
                <PokedexResult source={this.state.pokeInfo}></PokedexResult>

            </div>
    
        )

    }

}

export default Pokedex