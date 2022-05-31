import React from 'react';

const Weekdays = props => {
  console.log('PROPS:', props)

  const { state } = props;
  
  const weekdays = state.data.daily.map((day, i) =>{
    const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`
    
    return <div key={i} data-id={i} className='day'>
      <div className='weekday'>
        <p>Day of the week</p>
        <p>{Date(day.dt)}</p>
      </div>
      <div className='dayIcon'>
        <img src={icon} alt='weather icon'></img>
      </div>
      <div className='tempBox'>
        <div className='tempMin'>
          <p>{day.temp.min}ºC</p>
        </div>
        <div className='tempMax'>
          <p>{day.temp.max}ºC</p>
        </div>
      </div>
    </div>
    }
  );

  return <div className='bottom'>
    {weekdays}
  </div>
};

export default Weekdays;