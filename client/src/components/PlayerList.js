import React, { Component } from 'react'
import Player from './Player'
import axios from 'axios'
import {LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Line} from 'recharts';
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
                <div className="line-chart">
                    <LineChart
                    width={1300}
                    height={200}
                    data={this.state.data}
                    >
                    <XAxis dataKey="name"/>
                    <YAxis dataKey="searches" />
                    <Tooltip wrapperStyle={{fill:"black"}}/>
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="searches" stroke={this.props.mode ? "cornflowerblue" : "white"}/>
                    </LineChart>
                </div>
                {this.state.data.map(player => <Player player={player} key={player.id}/>)}
                <div className="error" style={this.state.failure ? {display:"block"} : {display:"none"}}>Could not fetch data</div>
            </div>
        )
    }
}
