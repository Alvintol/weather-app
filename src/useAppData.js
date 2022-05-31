import { useState, useEffect } from 'react';
import axios from 'axios';

const useAppData = () => {

  const [state, setState] = useState({
    button: 'WAITING',
    data: {}
  });

  const buttonToggle = () => {
    console.log('clicked')
    return setState(prev => {
      return { ...prev, button: 'CLICKED' }
    })
  }

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.0501&lon=-114.0853&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}`

    axios.get(url)
      .then(res => {
        setState(prev => {
          return { ...prev, data: res.data }
        })
      })
      .catch(err => { console.log(err) })
    // eslint-disable-next-line
  }, []);

  return { state, buttonToggle };
};

export default useAppData;
