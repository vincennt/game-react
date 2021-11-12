import React, { Component } from 'react';


class Accueil extends Component {
    
    render() {
        const {  handleNameChange, handleNameChangeBis, handleButton } = this.props
        return (
        <>
        <div className="row">
            <div className="col-3">
                <label className="form-label text-light">Player 1</label>
                <input
                placeholder='8 caractères max'
                className="form-control mb-4 border border-4 border-warning" 
                type="text"
                onChange={handleNameChange}
                />
            </div>
        </div>
      
        <div className="row">
            <div className="col-3">
                <label className="form-label text-light">Player 2</label>
                <input
                placeholder='8 caractères max'
                className="form-control mb-4 border border-4 border-danger"
                type="text"
                onChange={handleNameChangeBis}
                />
            </div>
        </div>
       
        <div className="row">
            <div className="">
                <button 
                className="btn btn-primary"
                type="button"
                onClick={() => handleButton()}
                >
                Start
                </button>
            </div>
        </div>
        </>
        );
    }
}

export default Accueil;