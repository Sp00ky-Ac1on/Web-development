import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const currentDate = new Date()
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  const month = months[currentDate.getMonth()]
  const day = currentDate.getDate()
  const year = currentDate.getFullYear()
  const formattedDate = `${month} ${day},${year}`

  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const amOrPm = hours >= 12 ? 'PM' : 'AM'
  const time = `${hours}:${minutes}${amOrPm}`


  const [city, setCity] = useState("Cairo")
  const [weatherData, setWeatherData] = useState(null)
  
  // we need to create a fetcher
  const API_KEY = "63df31842bc54c8ff3a4b77e01149549"
  const fetchWeatherData = async () => {
    try {
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      

      const data = await response.json()
      console.log(data)
      setWeatherData(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchWeatherData()
  }, [])

  const handleInputChange = (event) => {
    console.log(event.target.value) //the value of the input
    setCity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchWeatherData()
  }

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clouds":
        return "imgs/thunder.webp";
        break;
      case "Rain":
        return "imgs/rain_with_cloud.webp";
        break;
      case "Haze":
        return "imgs/sun.webp";
        break;
      case "Clear":
        return "imgs/sun.webp";
        break;
      
      case "Mist":
        return "imgs/Tornado.webp";
        break;
      default:
        return null
    }
  }


  return (
    <div className="App">
      <div className="container">
        {/* if i did't put the next line it will make an error as the weatherData is null */}

        {weatherData && (
          <>
            <h1 className="container_date">{formattedDate}</h1>
            {/* <h3 className="container_time">{ time}</h3> */}
            
            <div className="weather_data">
              <h2 className="container_city">{weatherData.name}</h2>
              <img
                src={getWeatherIcon(weatherData.weather[0].main)}
                width="200px" alt=""
                className="container_img"
              />
              
              <h2 className="container_degree">{Math.ceil(weatherData.main.temp) + "°"}</h2>
              <h2 className="container_comment">{weatherData.weather[0].description }</h2>
              <form className="form" onSubmit={handleSubmit}>
                <input type="text" className="input" placeholder="Search by city Name" onChange={handleInputChange} />
                <button type="submit">Get</button>
              </form>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default App;

