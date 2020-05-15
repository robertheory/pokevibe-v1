import React from 'react';
import './styles.css'

import Header from '../../components/Header'
import ItemList from '../../components/Itemdex/ItemList'
import ItemDisplay from '../../components/Itemdex/ItemDisplay'

class Itemdex extends React.Component {

  state = {

    item: 'https://pokeapi.co/api/v2/item/1/'

  }

  setItem = (url) => {
    
    this.setState({ item: url})
    
  }

  componentDidMount() {

    this.setItem(this.state.item)
    
  }
  
  render() {
    
    
    return (
      
      <div className="Home">
        
        <Header></Header>
        <ItemList handleItemSelect={this.setItem}></ItemList>
        <ItemDisplay item={this.state.item}></ItemDisplay>

      </div>

    )



  }

}

export default Itemdex;

