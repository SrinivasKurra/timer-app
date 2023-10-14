import React, { useState, useEffect } from 'react';

function TimerApp() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
  let interval;

  if (isRunning) {
    interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    },1000
    );
  } else {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
}, [isRunning]
  );

  const handleStart = () => {
    setIsRunning(true);
  }

  const handlePause = () => {
    setIsRunning(false);
  }

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }

  useEffect (() => {
    if(seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes +1);
    }
    if(minutes === 60) {
      setMinutes(0);
      setHours((prevHours) => prevHours + 1)
    }
  }, [seconds,minutes]);

  return (
    <div className='timerApp'>
      <h1>Timer</h1>
      <div className='timer'>
        <div className='time-display'>
          <span> {String(hours).padStart(2,'0')}: </span>
          <span> {String(minutes).padStart(2,'0')}: </span>
          <span> {String(seconds).padStart(2,'0')} </span>
        </div>
        <div className='buttons'>
          <button onClick={handleStart} disabled={isRunning} > Start</button>
          <button onClick={handlePause} disabled={!isRunning} > Pause</button>
          <button onClick={handleReset}> Reset</button>
        </div>

      </div>
      
    </div>
  )
}

export default TimerApp
