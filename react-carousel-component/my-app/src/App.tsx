import './App.css';
import { Carousel } from './Carousel';

const images = [
  {
    src: '/src/images/fushiguro.webp',
    alt: 'Megumi Fushiguro',
  },
  {
    src: '/src/images/inumaki.webp',
    alt: 'Toge Inumaki',
  },
  {
    src: '/src/images/itadori.webp',
    alt: 'Yuji Itadori',
  },
  {
    src: '/src/images/kugisaki.webp',
    alt: 'Nobara Kugisaki',
  },
  {
    src: '/src/images/panda.webp',
    alt: 'Panda',
  },
  {
    src: '/src/images/zen-in.webp',
    alt: "Maki Zen'in",
  },
];

function App() {
  return <Carousel images={images} />;
}

export default App;
