import React, { Component } from 'react'
import logo from './logo.svg';

class Header extends Component {
    render() {
        return <header className="App-header">
            {this.props.logo && <img src={logo} className="App-logo" alt="logo" />}
            <h1 className="App-title">{this.props.children}</h1>
        </header>
    }
}

export default Header