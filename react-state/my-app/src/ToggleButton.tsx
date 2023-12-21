import { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export function ToggleButton({ text, color }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('value returned by useState', isClicked);

  function handleClick() {
    console.log('value before calling setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('value after calling setter:', isClicked);
  }

  if (isClicked) {
    return (
      <button style={{ backgroundColor: color }} onClick={handleClick}>
        {text}
      </button>
    );
  }
  return (
    <button style={{ backgroundColor: 'gray' }} onClick={handleClick}>
      {text}
    </button>
  );
}
