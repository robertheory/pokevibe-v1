import React from 'react';
// import './styles.css'
import API from '../../../services/pokeapi'
import { normalizeNameDisplayItems } from '../../utils'

import ItemsByCategory from '../ItemsByCategory'

class ItemList extends React.Component {

    state = {

        category: '',
        selectedCategory: 'https://pokeapi.co/api/v2/item-category/1/'

    }

    setData = async () => {

        const itemData = await API.get(`item-category?offset=0&limit=45`, (response) => {

            // console.log(response)
            return response

        })
        
        this.setState({ category: itemData.data.results })
        // console.log(this.state.category)

        // console.log(itemData.data)

    }

    setSelectedCategory = (url) => {

        this.setState({ selectedCategory:url })

    }

    componentDidMount() {

        this.setData()

    }

    setItem = (url) => {

        this.props.handleItemSelect(url)

    }

    // 'item?offset=0&limit=954'

    render() {

        return (

            <div className="item-list">

                <div className="title">Search By Category:</div>

                <select name="category" id="category" onChange={() => this.setSelectedCategory(document.getElementById('category').value)} required>

                    <option hidden>Category</option>

                    {this.state.category === '' ? '' : this.state.category.map(item => (

                        <option value={item.url} key={item.url}>{normalizeNameDisplayItems(item.name)}</option>

                    ))}

                </select>

                <ItemsByCategory url={this.state.selectedCategory} handleItemSelect={this.setItem}></ItemsByCategory>

            </div>

        )



    }

}

export default ItemList

