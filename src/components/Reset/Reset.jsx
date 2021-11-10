import React, { Component } from 'react';

class Reset extends Component {
 
    render() {
        return (
            <button className="button"
            onClick={this.props.handleClick}
            >Restart</button>
        );
    }
}

export default Reset;