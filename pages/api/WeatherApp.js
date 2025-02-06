import React from 'react';

class WeatherApp extends React.Component {
constructor(props) {
    // Needed for initialization of the component
    super(props);
    this.state = {
        temperature: 30,
        condition: "Snowy"
    };
}

fetchWeatherData = () => {
    this.setState({
        temperature: Math.random() * 35,
        condition: "Sunny"
    });
}

    render() {
        return <div>
        <h1>Temparture: {this.state.temperature} Condition: {this.state.condition}</h1>
        <button onClick={this.fetchWeatherData}>Refresh</button>
        </div>
    }
}

export default WeatherApp;