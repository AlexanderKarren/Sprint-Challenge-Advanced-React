import React, { Component } from 'react'
import './Player.css'

export default class Player extends Component {
    render() {
        return (
            <div className="player-card">
                <h2>{this.props.player.name}</h2>
                <h3>{this.props.player.country}</h3>
                <p>Google Searches: {this.props.player.searches}</p>
            </div>
        )
    }
}
