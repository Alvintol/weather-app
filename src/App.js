import React from 'react';
import axios from 'axios'

const hardcodeAPIKEY = '';
const hardcodeCity = 'Calgary';
const hardcodeCountry = 'Canada';

function App() {

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${hardcodeCity},${hardcodeCountry}&appid=${hardcodeAPIKEY}`;

  return (
    <div>
      test
    </div>
  );
}

export default App;
