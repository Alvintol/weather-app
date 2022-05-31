import React from 'react';

const Weekdays = props => {
  console.log('PROPS:', props)

  const { state } = props;

  const weekdays = state.data.daily.map((day, i) =>
    <div key={i} className='day'>
      <div className='weekday'>
        <p>Day of the week</p>
        <p>{Date(day.dt)}</p>
      </div>
      <div className='dayIcon'>
        <i>{day.weather.icon}</i>
      </div>
      <div className='tempBox'>
        <div className='tempMin'>
          <p>{day.temp.min}</p>
        </div>
        <div className='tempMax'>
          <p>{day.temp.max}</p>
        </div>
      </div>
    </div>
  );

  return <div className='bottom'>
    {weekdays}
  </div>
};

export default Weekdays;