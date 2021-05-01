import React, {Component} from 'react';
import axios from 'axios';

class GetRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            level: null,
            status: null,
            time: null,
        };
    }

    componentDidMount() {
        const api = 'https://6yj8oicad9.execute-api.us-east-1.amazonaws.com/default/getTableItem';
        const key = { "id": "1" };

        axios.get(api, key)
        .then(response => this.setState({level: response.data.sensor_level,
            status: response.data.statString,
            time: response.data.time_exec
        }))
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        var {level,status,time} = this.state;
        const styleGreen = {
            color: '#00cc00',
            padding: '10px'
        }
        const styleRed = {
            color: '#ff0000',
            padding: '10px'
        }
        var statusStyle;
        if (status === 'Normal') {
            statusStyle = styleGreen;
        } else {
            statusStyle = styleRed;
        }

        return (
            <div className = "data-payload">
                <div style = {statusStyle} className = "status">
                    <p>Current Status:<br />
                    {status}</p>
                </div>
                <div className = "level">
                    <p>Current Level:<br />
                    {level}</p>
                </div>
                <div className = "time">
                    <p>Last Read:<br />
                    {time}</p>
                </div> 
            </div>
        );
    }

}

export default GetRequest;