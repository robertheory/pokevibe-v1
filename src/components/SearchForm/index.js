import React from 'react'
import { itemSearchfy } from '../utils'

export default function SearchForm(props) {

    return(

        <div className="search-form">

            <input type="text" className="search-bar" id="search-bar" placeholder="ID or name..."/>

            <button 
                className="search-button"
                onClick={() => props.handleSearch(itemSearchfy(document.getElementById('search-bar').value.toLowerCase()))}>
                Search
            </button>

        </div>

    )

}