import React from 'react';
import './styles.css'
import API from '../../services/pokeapi'

import SearchForm from '../../components/SearchForm'
import ItemDisplay from '../../components/Itemdex/ItemDisplay'

class Itemdex extends React.Component {

  state = {

    item: '1'

  }

  setItem = async (id) => {
    
    const itemData = await API.get(`item/${id}`, (response) => {
      
      // console.log(response)
      return response
      
    })
    
    
    this.setState({ item: itemData.data })
    // console.log(itemData.data)
    
  }

  componentDidMount() {

    this.setItem(this.state.item)

  }
  
  // 'item?offset=0&limit=954'
  
  render() {
    
    
    return (
      
      <div className="Home">


        <SearchForm handleSearch={this.setItem}></SearchForm>

        <ItemDisplay item={this.state.item}></ItemDisplay>

      </div>

    )



  }

}

export default Itemdex;

