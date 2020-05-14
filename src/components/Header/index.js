import React from 'react'
import './styles.css'
import { FiMenu, FiX } from 'react-icons/fi'

class Header extends React.Component {

    
    render() {
        
        function menuToggle() {
            
            document.getElementById('menu').classList.toggle("hidden")
    
        }

        return (

            <div className="header">

                <div className="title shadow-pop-tr">PokéVibe</div>

                <FiMenu className="menu-button" onClick={() => menuToggle()}></FiMenu>

                <nav className="menu hidden" id="menu">

                    <FiX className="menu-button" onClick={() => menuToggle()}></FiX>

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