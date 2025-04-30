import { useEffect, useRef, useState } from 'react';

export default function UseRef() {
  const [time,setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  let intervalId = useRef(0)

  useEffect(() => { // we need this here, to clear the timeout on unmount (moving to a new page using react-router)
    return () => clearInterval(intervalId.current);
  }, []);

  const handleStartTimer = () =>{
    if (intervalId.current) return;
    setIsRunning(true)
    intervalId.current = setInterval(() => {
      setTime((t) => t + 1)
    }, 1000)
  }

  const handlePauseTimer = () => {
    setIsRunning(false)
    clearInterval(intervalId.current)
  }

  const handleResetTimer = () => {
    setIsRunning(false)
    clearInterval(intervalId.current)
    setTime(0)
  }

  const formattedTime = (time) => {

    const minutes = Math.floor(time / 60);
    const secs = time % 60;

    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    }

  return (
    <div>
      <div className=" h-screen flex justify-center items-center">
        <div className=" p-4 flex flex-col items-center rounded-lg shadow-md bg-white dark:bg-gray-800">
          <h1 className="text-6xl">{formattedTime(time)}</h1>
          <div className='flex gap-4 mt-2'>
            <button className="p-2 bg-blue-600 text-white rounded" onClick={handleStartTimer}>{ isRunning ? "Start" : "Resume"}</button>
            <button className="p-2 bg-blue-600 text-white rounded" onClick={handlePauseTimer}>
              Pause
            </button>
            <button className="p-2 bg-blue-600 text-white rounded" onClick={handleResetTimer}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
