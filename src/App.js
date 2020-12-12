import React from "react";
import Temperature from './Temperature';
import env from "react-dotenv";
import'./App.css';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      condition: "",
      temperature: "",
      currentInputValue: ""
    };
  }
  componentDidMount() {
    this.updateWeatherInfo();
  }

  updateCurrentValue(e) {
    this.setState({ currentInputValue: e.target.value})
  }

  async updateWeatherInfo(city = "New York") {
    try {
      const data = await fetch(`http://api.weatherstack.com/current?access_key=${env.WEATHER_API_KEY}&query=${city}&units=f`);
      const jsonData = await data.json();
      
      this.setState({
        city: jsonData.location.name,
        condition: jsonData.current.weather_descriptions[0],
        temperature: jsonData.current.temperature,
        conditionIcon: jsonData.current.weather_icons[0],
      });
    } catch(err) {
      console.log(err)
      alert('Sorry, an error just happened!')
    }
  }

  render() {
    const { currentInputValue } = this.state;

    return (
      <div className = "content">
        <div>
          <h1>Welcome to My weather Board!</h1>
          <input onChange={(e) => this.updateCurrentValue(e)} placeholder="Type name of the city" />
          <button onClick={(e) => this.updateWeatherInfo(currentInputValue)}>Search</button>
        </div>
        <div>
           <Temperature {...this.state} /> 
        </div>
      </div>
    );
  }
}

export default App;
