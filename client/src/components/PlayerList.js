import React, { Component } from 'react'
import Player from './Player'
import axios from 'axios'
import './PlayerList.css'

export default class PlayerList extends Component {
    state = {
        data: [],
        failure: false,
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axios.get("http://localhost:5000/api/players")
        .then(response => {
            console.log(response.data);
            this.setState({
                data: response.data,
                failure: false
            });
        })
        .catch(error => {
            console.log(error);
            this.setState({failure: true})
        })
    }

    render() {
        return (
            <div className="list-container">
                {this.state.data.map(player => <Player player={player} key={player.id}/>)}
                <div className="error" style={this.state.failure ? {display:"block"} : {display:"none"}}>Could not fetch data</div>
            </div>
        )
    }
}
