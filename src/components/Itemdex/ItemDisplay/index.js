import React, { useState, useEffect } from 'react'
import { normalizeNameDisplayItems } from '../../utils'
import './styles.css'
import snorlax from '../../../assets/img/sad-snorlax.png'
import axios from 'axios'

export default function ItemDisplay(props) {

    const [item, setItem] = useState('')
    
    useEffect(() => {

        axios.get(props.item)
            .then(function (response) {
                // console.log(response.data)
                // console.log(response.data)
                setItem(response.data)
            }
        )
            
    }, [props])

    return (

        <div>

            {item.id !== undefined ?

                <div className="items-display">

                    <div className="item-name marble">

                        {normalizeNameDisplayItems(item.name)}
                        <div>no. {item.id}</div>

                    </div>

                    {item.sprites.default === null ? 'No image' : <img src={item.sprites.default} alt={item.name} className="item-img" />}

                    <div className="cost marble">Cost: {item.cost}</div>

                    <div className="category marble">Category: {normalizeNameDisplayItems(item.category.name)}</div>

                    
                        {item.attributes.length <= 0 ? '' :
                            <div className="attributes marble">
                                <h4>Attributes:</h4>
                                {item.attributes.map(item => (
                                    <div key={item.name} className="attribute">{normalizeNameDisplayItems(item.name)}</div>
                                ))}                  
                            </div>
                        }


                    <div className="description marble">

                        {item.effect_entries.map(item => (

                            <p key={item.short_effect} className="effects">{item.effect}</p>

                        ))}

                    </div>

                </div>


                :
                <div className="not-found">
                    
                    <div className="not-found-title">Item not found</div>

                    <img src={snorlax} alt='Item not found' />

                </div>}


        </div>

    )

}