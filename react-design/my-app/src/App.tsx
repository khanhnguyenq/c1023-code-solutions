import './App.css';
import { CarouselButton } from './CarouselButtons';
import { CurrentName } from './CurrentName';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { RotatingBanner } from './RotatingBanner';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <div className="flex row-to-column">
      <RotatingBanner arr={items} />
      <CurrentName />
      <div>
        <NextButton />
      </div>
      <div>
        <CarouselButton />
      </div>
      <div>
        <PrevButton />
      </div>
    </div>
  );
}

export default App;
