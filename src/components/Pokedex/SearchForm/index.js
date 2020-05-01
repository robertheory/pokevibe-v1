import React from 'react'

export default function SearchForm(props) {

    return(

        <div className="search-form">

            <input type="text" className="search-bar" id="search-bar" placeholder="Type here..."/>

            <button 
                className="search-button"
                onClick={() => props.handleSearch(document.getElementById('search-bar').value.toLowerCase())}>
                Search
            </button>

        </div>

    )

}