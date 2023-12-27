export function RotatingBanner({ items }: { items: string[] }) {
  return (
    <div className="flex row-to-column">
      <CurrentName item={items[0]} />
      <PrevButton />
      <div>
        <CarouselButton index={items.length} />
      </div>
      <NextButton />
    </div>
  );
}

function CurrentName({ item }: { item: string }) {
  return <span>{item}</span>;
}

function PrevButton() {
  return <button className="w-50">Prev</button>;
}

function NextButton() {
  return <button className="w-50">Next</button>;
}

function CarouselButton({ index }: { index: number }) {
  const numbers = [];
  for (let i = 0; i < index; i++) {
    numbers.push(i);
  }
  const numOfButtons = numbers.map((i) => <button>{i}</button>);
  return numOfButtons;
}
