import React, { Component } from 'react'

import './player.css'

class Player extends Component {

    render() {

        const {number, img,joueur} = this.props
        
        return (

            // Return chaque player avec son nom et son avatar

            <div className={joueur}>
                <div style={{background :  `url(${img}) no-repeat center/cover`,
                 width : '45%', height : '100%'}}></div>
                <h2>Player {number} </h2>
            </div>
        )
    }
}
export default Player