import React, {useEffect, useState} from 'react'
import axios from 'axios'

import './Toronto.css'


export default function Toronto() {
    

    const [place, setPlace] = useState([]);
    const icon = `http://openweathermap.org/img/wn/${place.icon}@2x.png`;
  
    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Suva&appid=3969f146bf3ff9e11c3c43f86d7d91c8`)
        .then(response =>  { 
            setPlace({ 
                name: response.data.name,
                main: response.data.weather[0].main,
                min_temp: response.data.main.temp_min,
                max_temp: response.data.main.temp_max,
                description: response.data.weather[0].description,
                icon: response.data.weather[0].icon,
                temp: response.data.main.temp,
                feels_like: response.data.main.feels_like,
                humidity: response.data.main.humidity,
             })
        })
        .catch(error => console.log(error))
    }, [])

    return (
            <div className='items'>  
             
                <h1 class='header'>Current Weather</h1>
                <img src={icon} alt='icon' ></img>             
                
                <div  class = 'list'>
                <p>City</p>
                <p>Weather</p>
                <p>Weather-level</p>
                <p>Temperature</p>
                <p>Feels like</p>
                <p>Humidity</p>
                <p>Minimum Temperature</p>
                
                <p>{place.name}</p>
                <p>{place.main}</p>
                <p> {place.description}</p>
                <p>{place.temp}℉</p>
                <p>{place.feels_like}℉</p>
                <p>{place.humidity}%</p>
                <p>{place.min_temp}</p>
                
                
                </div>
     		</div>
          
        
    )
}