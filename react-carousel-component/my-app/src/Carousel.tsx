import { useEffect, useState } from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';
import { IoChevronBack } from 'react-icons/io5';

type Pictures = {
  src: string;
  alt: string;
};

type CarouselProps = {
  images: Pictures[];
};

export function Carousel({ images }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (currentImage >= images.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, 3000);
    return () => clearInterval(id);
  }, [currentImage, images]);

  return (
    <div className="container">
      <div className="row flex center">
        <Button
          label="Prev"
          onClick={() =>
            setCurrentImage((currentImage - 1 + images.length) % images.length)
          }
        />
        <ImageCarousel images={images} currentImage={currentImage} />
        <Button
          label="Next"
          onClick={() => setCurrentImage((currentImage + 1) % images.length)}
        />
      </div>
      <div className="row flex center">
        <Circles
          images={images}
          currentImage={currentImage}
          onSelect={(i) => setCurrentImage(i)}
        />
      </div>
    </div>
  );
}

type ImageCarouselProps = {
  images: CarouselProps['images'];
  currentImage: number;
};

function ImageCarousel({ images, currentImage }: ImageCarouselProps) {
  return (
    <div className="image">
      <img src={images[currentImage].src} alt={images[currentImage].alt} />
    </div>
  );
}

type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: ButtonProps) {
  return label === 'Prev' ? (
    <IoChevronBack onClick={onClick} />
  ) : (
    <IoChevronForward onClick={onClick} />
  );
}

type CirclesProps = {
  currentImage: number;
  images: CarouselProps['images'];
  onSelect: (i: number) => void;
};

function Circles({ currentImage, images, onSelect }: CirclesProps) {
  const indicators = [];
  for (let i = 0; i < images.length; i++) {
    if (currentImage === i) {
      indicators.push(<FaCircle key={i} onClick={() => onSelect(i)} />);
    } else {
      indicators.push(<FaRegCircle key={i} onClick={() => onSelect(i)} />);
    }
  }
  return <div>{indicators}</div>;
}
