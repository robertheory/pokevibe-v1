import React from 'react';
import './styles.css'

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
  
  // 'item?offset=0&limit=954'
  
  render() {
    
    
    return (
      
      <div className="Home">


        <ItemList handleItemSelect={this.setItem}></ItemList>
        <ItemDisplay item={this.state.item}></ItemDisplay>

        {/* <SearchForm handleSearch={this.setItem}></SearchForm> */}
        {/* <ItemList item={this.state.item}></ItemList> */}

      </div>

    )



  }

}

export default Itemdex;

