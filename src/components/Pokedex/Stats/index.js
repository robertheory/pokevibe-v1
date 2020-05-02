import React from 'react'
import { titleLeizeArray } from '../../utils'

export default function Stats(props) {

    return(

            <div className="stats marble">
                
                <h5 className="stat-header">

                    Stats:

                </h5>

                {props.stats.map(stat => (

                    <div className="stat-item" key={[stat.stat.name]}>

                        {titleLeizeArray([stat.stat.name])}

                        <div className="stat-value">{stat.base_stat}</div>

                    </div>

                ))}

            </div>

    )

}