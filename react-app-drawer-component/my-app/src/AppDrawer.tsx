import { useState } from 'react';
import { MdMenu } from 'react-icons/md';

type Props = {
  header: string[];
};

export function AppDrawer({ header }: Props) {
  const [clicked, setClicked] = useState(false);

  return clicked ? (
    <>
      <CreateOverlay handleClick={() => setClicked(!clicked)} />
      <RenderList header={header} handleClick={() => setClicked(!clicked)} />
    </>
  ) : (
    <MenuButton menuClick={() => setClicked(!clicked)} />
  );
}

type MenuButtonProps = {
  menuClick: () => void;
};

function MenuButton({ menuClick }: MenuButtonProps) {
  return (
    <div className="menu" onClick={menuClick}>
      <MdMenu />
    </div>
  );
}

type OverlayProps = {
  handleClick: () => void;
};

function CreateOverlay({ handleClick }: OverlayProps) {
  return (
    <>
      <div className="overlay" onClick={handleClick}></div>
    </>
  );
}

type RenderProps = {
  header: string[];
  handleClick: () => void;
};

function RenderList({ header, handleClick }: RenderProps) {
  const titles = header.map((i) => (
    <p key={i} onClick={handleClick}>
      {i}
    </p>
  ));
  return (
    <div className="titles">
      <h1>Choose a game</h1>
      {titles}
    </div>
  );
}
