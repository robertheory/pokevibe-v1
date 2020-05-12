import React from 'react';
// import './styles.css'
import API from '../../../services/pokeapi'
import { normalizeNameDisplayItems } from '../../utils'

class ItemList extends React.Component {

    state = {

        items: '',
        category: ''

    }

    setData = async () => {

        const itemData = await API.get(`item-category?offset=0&limit=45`, (response) => {

            // console.log(response)
            return response

        })
        
        this.setState({ category: itemData.data.results })
        console.log(this.state.category)

        // console.log(itemData.data)

    }

    componentDidMount() {

        this.setData()

    }

    // 'item?offset=0&limit=954'

    render() {

        return (

            <div className="item-list">

                <h4>Search By Category: </h4>

                <select name="category" id="category" onChange={() => alert(document.getElementById('category').value)}>

                    {this.state.category === '' ? '' : this.state.category.map(item => (

                        <option value={item.url} key={item.url}>{normalizeNameDisplayItems(item.name)}</option>

                    ))}

                </select>

            </div>

        )



    }

}

export default ItemList

