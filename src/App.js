import React from 'react';
import axios from 'axios'

const App = () => {

  // const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${process.env.REACT_APP_LAT}&lon=${process.env.REACT_APP_LON}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`;


  return (
    <div className='app'>
      <div className='container'>

        <div className='top'>
          <div className='cityIcon'>
            <div className='location'>
              <p>city</p>
            </div>
            <div className='weatherIcon'>
              <p>weatherIcon</p>
            </div>
          </div>
          <div className='currentTemp'>
            <h1>currentTemp</h1>
          </div>
          <div className='feels'>
            <p>feels</p>
          </div>
          <div className='main'>
            <p>main</p>
          </div>
          <div className='description'>
            <p>description</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='day1'>
            <div className='day'>
              <p>Day 1</p>
            </div>
            <div className='tempBox'>
              <div className='tempMin'>
                <p>tempMin</p>
              </div>
              <div className='tempMax'>
                <p>tempMax</p>
              </div>
            </div>
            <div className='humWindBox'>
              <div className='humidity'>
                <p>humidity</p>
              </div>
              <div className='wind'>
                <p>wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
