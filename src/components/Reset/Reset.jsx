import React, { Component } from 'react';

class Reset extends Component {
 
    render() {
        const {handleClick, homeClick, joueur} = this.props
        return (
            <>
            <button className={joueur ? 'button border border-5 border-warning' : 'button border border-5  border-danger'}
            onClick={homeClick}
            >Acceuil </button>
            <button className={joueur ? 'button border border-5 border-warning' : 'button border border-5  border-danger'}
            onClick={handleClick}
            >Restart</button>
            </>
        );
    }
}

export default Reset;