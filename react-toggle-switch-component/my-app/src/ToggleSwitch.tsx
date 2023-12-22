import { useState } from 'react';
import './App.css';

type Props = {
  text: string;
  className: string;
};

export function ToggleSwitch({ text, className }: Props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex">
      <div
        className={toggle ? 'circle-on' : 'circle-off'}
        onClick={() => setToggle(!toggle)}></div>
      <button
        className={toggle ? 'on' : className}
        onClick={() => setToggle(!toggle)}></button>
      <p style={{ paddingLeft: '10px' }}>{toggle ? 'ON' : text}</p>
    </div>
  );
}
