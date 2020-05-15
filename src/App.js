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

      </div>

    )



  }

}

export default App;

