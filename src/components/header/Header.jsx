import React, { Component } from 'react'

import './header.css'

class Header extends Component {
    render() {
        const {title} = this.props
        return (
            <div>
                    <h1>{title}</h1>
            </div>
        )
    }
}

export default Header