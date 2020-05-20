import React from 'react';
import './global.css'
import Footer from './components/Footer'

import Routes from './routes'

class App extends React.Component {

  render () {
    
    return (

      <div className="App">

        <Routes></Routes>
        
        <Footer></Footer>

      </div>

    )



  }

}

export default App;

