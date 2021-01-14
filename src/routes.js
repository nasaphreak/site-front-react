import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Blog } from './pages/blog'
import { Home } from './pages/home'
import { Sobre } from './pages/sobre'
import { Sociais } from './pages/sociais'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/blog" component={Blog} />
            <Route path="/sociais" component={Sociais} />
        </Switch>
    )
}