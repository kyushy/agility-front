import React from 'react'
import { Navbar } from 'react-bootstrap'
import './header.css'

export let Header = () => {
    return(
        <div className="Header">
            <Navbar className="nopadding" variant="dark">
                <Navbar.Brand className="nopadding" href='/'>
                    <img alt="logo" src="https://engit.fr/wp-content/themes/html5blank-stable/img/logo.png"/>
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}