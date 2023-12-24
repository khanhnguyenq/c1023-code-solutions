import { FaPause, FaPlay } from 'react-icons/fa';
import { useState, useRef } from 'react';
import './StopWatch.css';

export function StopWatch() {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);

  const idRef = useRef<NodeJS.Timeout | null>(null);

  function timer() {
    setCount((prev) => prev + 1);
  }

  function start() {
    idRef.current = setInterval(timer, 1000);
  }

  function clear() {
    if (idRef.current) {
      clearInterval(idRef.current);
    }
  }

  function reset() {
    setCount(0);
  }

  return toggle ? (
    <>
      <div className="circle" onClick={reset}>
        <p>{count}</p>
      </div>
      <FaPlay
        className="toggle-button"
        onClick={() => {
          start();
          setToggle(!toggle);
        }}
      />
    </>
  ) : (
    <>
      <div className="circle">
        <p>{count}</p>
      </div>
      <FaPause
        className="toggle-button"
        onClick={() => {
          clear();
          setToggle(!toggle);
        }}
      />
    </>
  );
}
