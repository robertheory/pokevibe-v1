import React from 'react'
import './styles.css'

class Header extends React.Component {

    render() {

        return (

            <div className="header">

                <div className="title">PokéVibe</div>

                <nav>

                    <div className="item">
                        <a href="/">Home</a>
                    </div>

                    <div className="item">
                        <a href="/pokedex">Pokédex</a>
                    </div>

                    <div className="item">
                        <a href="/itemdex">Itemdex</a>
                    </div>

                </nav>


            </div>

        )


    }


}

export default Header