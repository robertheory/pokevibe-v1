import React from 'react'
import { Link } from 'react-router-dom'
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
                        <Link to="/">Home</Link>
                    </div>

                    <div className="item">
                        <Link to="/pokedex">Pokédex</Link>
                    </div>

                    <div className="item">
                        <Link to="/itemdex">Itemdex</Link>
                    </div>

                </nav>


            </div>

        )


    }


}

export default Header