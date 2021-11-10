import React, { Component } from 'react';

class Reset extends Component {
    constructor () {
        super ()
        
        this.handleReset = this.handleReset.bind (this)
    }

    handleReset(e) {
        this.setState({newBasic : this.props.basic })
    }

    render() {
        return (
            <div>
                <button onClick/>
            </div>
        );
    }
}

export default Reset;