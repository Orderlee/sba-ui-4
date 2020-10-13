import React from 'react'
import {About,Contact,Events,Home,Products,Error} from '../components'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

const Main = () => <>
        <BrowserRouter>
            <div className="main">
                <switch>
                    <Route exct path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Redirect from={"/history"} to={"/about/history"}/>
                    <Route path="contact" component={Contact}/>
                    <Route path="/events" component={Events}/>
                    <Route path="/products" component={Products}/>
                    <Route component={Error}/>
                    
                </switch>
            </div>
        </BrowserRouter>
    </>

export default Main