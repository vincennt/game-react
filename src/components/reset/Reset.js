import React, { Component } from 'react';

class Reset extends Component {
    constructor () {
        super ()

        this.resetGrid = this.resetGrid.bind(this)
    }

    resetGrid () {
        const resetGrid = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        ]
        
}
    
    render() {
        return (
            <div>
                <h1>hi</h1>
            </div>
        );
    }
}

export default Reset;