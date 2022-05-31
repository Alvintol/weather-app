import React from 'react';
import moment from 'moment';

const Weekdays = props => {

  const { state } = props;

  const weekdays = state.data.daily
    .filter((day, i) => i < 7)
    .map((day, i) => {
      const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`
      return <div key={i} data-id={i} className='day'>
        <div className='weekday'>
          <p>{moment.unix(day.dt).format('dddd')}</p>
        </div>
        <div className='dayIcon'>
          <img src={icon} alt='weather icon'></img>
        </div>
        <div className='tempBox'>
          <div className='tempMin'>
            <h3>{Math.round(day.temp.min)}º</h3>
          </div>
          <div className='tempMax'>
            <h3>{Math.round(day.temp.max)}º</h3>
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