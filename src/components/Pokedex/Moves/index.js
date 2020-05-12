import React from 'react'
// import API from '../../../services/pokeapi'
// import axios from 'axios'

export default function Moves(props) {

    // const [move, setMove] = useState('')

    // useEffect(() => {

    //     const movePath = props.moves.map(item => {

    //         return item.move.url

    //     })


    //     setMove(movePath)

    //     console.log(movePath[0])

        // const link = move[0]

        // console.log(link)

        // function showMove(move) {

        // const moveInfo = API.get('move/13/', (response) => {

        //     return response

        // })

        // console.log(moveInfo)

        // }
    // }, [props])



    return (

        <div className="moves marble">

            <h5>Moves:</h5>

            <div className="moves-items">

                {/* {moves.map(move => (

                    <div className="move-item" key={move.name}>
                        <div className="move-name">{move.name}</div>
                        <div className="move-stat">
                            Acurracy
                    <div className="stat-value">{move.acurracy}</div>
                        </div>
                        <div className="move-stat">
                            Power
                    <div className="stat-value">{move.power}</div>
                        </div>
                        <div className="move-stat">
                            PP
                    <div className="stat-value">{move.pp}</div>
                        </div>
                        <div className="move-stat">
                            Type
                    <div className="stat-value">{move.type}</div>
                        </div>
                        <div className="move-stat">
                            Learn
                    <div className="stat-value">{move.learn}</div>
                        </div>

                    </div>
                    

                ))} */}


            </div>

        </div>

    )

}