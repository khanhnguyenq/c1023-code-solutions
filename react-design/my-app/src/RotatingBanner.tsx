import { Dispatch, SetStateAction, useState } from 'react';

export function RotatingBanner({ items }: { items: string[] }) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex row-to-column">
      <CurrentName item={items[counter]} />
      <PrevButton
        counter={counter}
        setCounter={setCounter}
        index={items.length}
      />
      <div>
        <CarouselButton
          index={items.length}
          counter={counter}
          setCounter={setCounter}
        />
      </div>
      <NextButton
        counter={counter}
        setCounter={setCounter}
        index={items.length}
      />
    </div>
  );
}

function CurrentName({ item }: { item: string }) {
  return <span>{item}</span>;
}

type Props = {
  index: number;
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};

function PrevButton({ counter, setCounter, index }: Props) {
  return (
    <button
      onClick={() => {
        if (counter === 0) {
          setCounter(index - 1);
        } else {
          setCounter(counter - 1);
        }
      }}
      className="w-50">
      Prev
    </button>
  );
}

function NextButton({ counter, setCounter, index }: Props) {
  return (
    <button
      onClick={() => {
        if (counter === index - 1) {
          setCounter(0);
        } else {
          setCounter(counter + 1);
        }
      }}
      className="w-50">
      Next
    </button>
  );
}

function CarouselButton({ index, counter, setCounter }: Props) {
  const numbers = [];
  for (let i = 0; i < index; i++) {
    numbers.push(i);
  }
  const numOfButtons = numbers.map((i) => (
    <button
      style={{ backgroundColor: counter === i ? 'lightblue' : '' }}
      onClick={() => setCounter(i)}
      key={i}>
      {i}
    </button>
  ));

  return numOfButtons;
}
