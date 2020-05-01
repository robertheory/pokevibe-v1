import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import PokedexSide from './pages/PokedexSide'
import Pokedex from './pages/Pokedex'
import Itemdex from './pages/Itemdex'

export default function Routes() {

    return (

        <BrowserRouter>
        
            <Switch>

                <Route path="/" exact component={Home}></Route>
                <Route path="/pokedex" exact component={Pokedex}></Route>
                <Route path="/pokedexside" component={PokedexSide}></Route>
                <Route path="/itemdex" component={Itemdex}></Route>

            </Switch>
        
        </BrowserRouter>

    )

}