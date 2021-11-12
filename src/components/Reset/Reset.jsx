import React, { Component } from 'react';

class Reset extends Component {
 
    render() {
        const {handleClick, homeClick, joueur} = this.props
        return (
            <>
            {/* Boutton permettant le retour à l'acceuil  */}
            <button className={joueur ? 'button border border-5 border-warning' : 'button border border-5  border-danger'}
            onClick={homeClick}
            >Acceuil </button>
            
            <audio loop autoPlay
                src='./time.mp3'>
            </audio>
            <audio id="audio" src="../../mario-coin-sound-effect.mp3"></audio>

            {/* Boutton permettant de relancer la partie  */}

            <button className={joueur ? 'button border border-5 border-warning' : 'button border border-5  border-danger'}
            onClick={handleClick}
            >Restart</button>
            </>
        );
    }
}

export default Reset;