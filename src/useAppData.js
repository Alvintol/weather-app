import { useState, useEffect } from 'react';
import axios from 'axios';

const useAppData = () => {

  const [state, setState] = useState({
    button: 'WAITING',
    data: {}
  });

  const buttonToggle = () =>
    setState(prev => {
      return { ...prev, button: 'CLICKED' }
    })


useEffect(() => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=51.0501&lon=-114.0853&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}&units=metric`

  const getData = async () => {
    const response = await axios.get(url)
    setState(prev => {
      return { ...prev, data: response.data }
    })
  }
  getData()
}, []);

return { state, buttonToggle };
};

export default useAppData;
