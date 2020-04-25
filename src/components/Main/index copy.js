import React from 'react'
import './styles.css'

import pokeapi from '../../services/pokeapi'

class Main extends React.Component {

    state = {
        
        name:  '',
        order: '',
        weight: '',
        moves: [],
        abilities: [],
        base_experience: '',
        sprite_back_default: '',
        sprite_back_female: '',
        sprite_back_shiny: '',
        sprite_back_shiny_female: '',
        sprite_front_default: '',
        sprite_front_female: '',
        sprite_front_shiny: '',
        sprite_front_shiny_female: ''
        
    }

    setInfo = (data) => {


        // const obj = JSON.parse(data)
        console.log("Data: "+ data.sprites.front_default)

        this.setState({ name: data.name })
        this.setState({ sprite_front_default: data.sprites.front_default })
        // this.setState({ sprite_back_female: data.back_female })
        
        // this.setState({ order: data.order })
        // this.setState({ weight: data.weight })
        // this.setState({ moves: data.moves })
        // this.setState({ abilities: data.abilities })
        // this.setState({ base_experience: data.base_experience })

    }
    
    componentWillReceiveProps() {

        pokeapi.get(this.props.source).then(response => {

            this.setInfo(response.data)
            // console.log("Response.data: "+ response.data)

        })

    }   
    
    render(){
        
        return (
            
            <div className="main">
    
                {/* <h1> */}
                    {}
                    <h1>{this.state.name}</h1>
                    {/* {this.state.abilities} */}
                    <img src={this.state.sprite_front_default} alt="sprite"/>
                    {/* <img src={this.state.sprite_back_female} alt="sprite"/> */}
                {/* </h1> */}
    
            </div>
    
        )

    }


}

export default Main