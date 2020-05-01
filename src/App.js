import React from 'react';
import Header from './components/Header'
import './global.css'

import Routes from './routes'

class App extends React.Component {

  render () {
    
    return (

      <div className="App">

        <Header></Header>
        <Routes></Routes>
        {/* <Pokedex source={this.state.pokeInfo}></Pokedex> */}
        {/* <Pokedex></Pokedex> */}

      </div>

    )



  }

}

export default App;

