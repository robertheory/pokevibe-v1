import React from 'react';
import './styles.css'
import { FiGithub, FiLink2, FiLinkedin } from 'react-icons/fi'

class Home extends React.Component {

  render () {
    
    return (

      <div className="home">

        <h4 className="marble">ReactJS Pokémon Guide</h4>

        <p className="marble">
          I've been working on this simple guide about the Pokémon universe starting with a Pokédex and an Itemdex, however, 
          i'm looking forward to improve this project in order to not just offer way more info about this amazing universe but to 
          improve my skill on ReactJS.
        </p>

        <div className="links">

          <div className="link marble">
            <FiLink2></FiLink2>
            <a href="https://pokeapi.co/" target="new">
              Made with PokéAPI
            </a>
          </div>
          
          <div className="link marble">
              <FiGithub></FiGithub>
              <a href="https://github.com/doravantebeto" target="new">
                Github
              </a>
          </div>
          
          <div className="link marble">
              <FiLinkedin></FiLinkedin>
              <a href="https://www.linkedin.com/in/roberto-araujo-da-costa-7a3342148/" target="new">
                Linkedin
              </a>
          </div>


        </div>


      </div>

    )



  }

}

export default Home;

