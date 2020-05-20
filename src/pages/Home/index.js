import React from 'react';
import './styles.css'
import Header from '../../components/Header'

class Home extends React.Component {

  render () {
    
    return (

      <div className="home">

        <Header></Header>

        <h4 className="marble">ReactJS Pokémon Guide</h4>

        <p className="marble">
          I've been working on this simple guide about the Pokémon universe starting with a Pokédex and an Itemdex, however, 
          i'm looking forward to improve this project in order to not just offer way more info about this amazing universe but to 
          improve my skill on ReactJS.
        </p>

      </div>

    )



  }

}

export default Home;

