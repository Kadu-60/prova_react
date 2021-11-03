import React from "react"
import { Switch, Route} from "react-router-dom"

import Home from "./pages/Home/Home"
import Blocks from "./pages/Blocks/Blocks"
import Cards from "./pages/Cards/Cards"
import Formulario from "./pages/Formulario/Formulario"
import Pricing from "./pages/Pricing/Pricing"
import Teste from "./pages/Teste/Teste"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/cards" component={Cards}/>
            <Route path="/blocks" component={Blocks}/>
            <Route path="/forms" component={Formulario}/>
            <Route path="/pricing" component={Pricing}/>
        </Switch>
    )
}