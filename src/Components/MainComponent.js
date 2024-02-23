import React, { Component } from 'react'
import './MainComponent.css'

export default class MainComponent extends Component {



  render() {
    return (
      <div className='Card'>
        
        <h1>{this.props.Title}</h1>
        <img src={this.props.Image} alt=''/>
        <p>{this.props.Para}</p>
        <button>{this.props.Button}</button>
        
      </div>
    )
  }
}
