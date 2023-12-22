import { useState } from 'react';
import './App.css';

export function ToggleSwitch() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex">
      <div
        className={toggle ? 'circle-on' : 'circle-off'}
        onClick={() => setToggle(!toggle)}></div>
      <button
        className={toggle ? 'on' : 'off'}
        onClick={() => setToggle(!toggle)}></button>
      <p>{toggle ? 'ON' : 'OFF'}</p>
    </div>
  );
}
