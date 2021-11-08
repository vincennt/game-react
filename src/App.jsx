import React, { Component } from 'react'
import Player from './components/Player/Player';
import Grid from './components/Grid/Grid';

export default class App extends Component {
  render() {
    return (
      <>
        {/* <h1>hello</h1> */}
        <Player/>
        <Grid/>
      </>
    )
  }
}
