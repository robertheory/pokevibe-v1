import React, { useState, useEffect } from 'react'
import { normalizeNameDisplayItems } from '../../utils'
const axios = require('axios').default

export default function ItemsByCategory(props) {

    const [categoryItems, setCategoryItems] = useState('')
    
    useEffect(() => {

        axios.get(props.url)
            .then(function (response) {
                setCategoryItems(response.data.items)
            }
        )
        
    }, [props])

    return (

        <div className="category-list">

            <select name="categoryItems" id="categoryItems" onChange={() => props.handleItemSelect(document.getElementById('categoryItems').value)}>

                <option hidden>Item</option>

                {categoryItems !== '' ? categoryItems.map(item => (

                    <option key={item.name} value={item.url}>{normalizeNameDisplayItems(item.name)}</option>

                )) : ''}

            </select>

        </div>

    )

}