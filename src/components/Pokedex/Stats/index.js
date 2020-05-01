import React from 'react'

export default function Stats(props) {

    return(

            <div className="stats marble">
                
                <h5 className="stat-header">

                    Stats:

                </h5>

                {props.stats.map(stat => (

                    <div className="stat-item" key={stat.name}>

                        {/* {console.log(stat.stat)} */}

                        <div className="stat-value">{stat.base_stat}</div>

                    </div>

                ))}

            </div>

    )

}