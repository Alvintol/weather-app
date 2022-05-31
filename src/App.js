import React from 'react';
import useAppData from './useAppData';
import Weekdays from './Weekdays';

const App = () => {

  const { state, buttonToggle } = useAppData();

  return (
    <div className='app'>
      <div className='background'>
      </div>
      {state.button === 'WAITING' &&
        <button
          className='checkButton'
          onClick={() => buttonToggle()}
        >
          Check Weather
        </button>
      }
      {state.button === 'CLICKED' &&
        <div className='container'>
          <div className='top'>
            <div className='currentTemp'>
              <h1>Your Location: <span className='yourTemp'>{state?.data.current.temp}ºC</span></h1>
            </div>
          </div>
          <Weekdays
            key='weekday'
            state={state}
          />
        </div>
      }
    </div>
  );
}

export default App;
