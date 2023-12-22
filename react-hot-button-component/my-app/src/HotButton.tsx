import { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export function HotButton({ text, color }: Props) {
  const [count, setCount] = useState(0);

  function onCustomClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button
        style={{
          backgroundColor:
            count >= 18
              ? '#FFFFFF'
              : count >= 15
              ? '#FFFA05'
              : count >= 12
              ? '#F6B26B'
              : count >= 9
              ? '#E06666'
              : count >= 6
              ? '#674EA7'
              : count >= 3
              ? '#351C75'
              : color,
          color: count >= 12 ? '#000' : '#FFF',
          boxShadow: '5px 5px 5px #fff',
        }}
        onClick={onCustomClick}>
        {text}
      </button>
      <p
        style={{
          backgroundColor: '#FFFB80',
          color: '#000',
          marginLeft: '1rem',
          borderRadius: '5px',
        }}>
        {count} Clicks
      </p>
    </>
  );
}
