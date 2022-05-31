import React from 'react';
import useAppData from './useAppData';
import Weekdays from './Weekdays';

const App = () => {

  const { state, buttonToggle } = useAppData();

  console.log('STATE:', state);
  console.log('DATA:', state.data);

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
            <div className='cityIcon'>
              <div className='location'>
                <p>Calgary</p>
              </div>
              <div className='weatherIcon'>
                <i>{state.data.current.weather[0].icon}</i>
              </div>
            </div>
            <div className='currentTemp'>
              <h1> {state.data.current.temp}ºC</h1>
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
