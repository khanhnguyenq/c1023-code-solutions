import { useState } from 'react';
import { MdMenu } from 'react-icons/md';

type Props = {
  header: string[];
};

export function AppDrawer({ header }: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <div className={opened ? 'overlay' : 'no-overlay'}>
      <MenuButton menuClick={() => setOpened(!opened)} />
      <div
        onClick={() => setOpened(!opened)}
        className="flex row-to-column center-all">
        <h1>No Title Selected</h1>
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="525.801"
          height="312.616">
          <path
            d="M1.5 19.687l20.708 63.64 136.876 17.172c-.78 4.57-1.964 8.802 0 15.658L34.33 127.773l25.254 48.993 101.52-38.386c1.212 5.32 2.954 10.243 6.061 14.142l-77.782 57.579 35.86 24.244 52.529-63.135c3.261 3.533 5.705 7.416 12.122 9.596l-28.285 63.135 33.84 7.576 11.617-60.104c22.628 8.477 36.712-23.625 15.153-31.82-44.704-15.066-57.954-50.412-30.305-112.127-9.507 7.035-18.645 15.818-26.264 31.82z"
            fill="#000"
          />
          <path
            d="M262.379 1l-79.784 123.96h79.784l-40.534-61.553h81.018zm40.484 62.407l-40.484 61.562h80.703z"
            fill="#000"
          />
          <path
            d="M210.097 303.54l5.05-16.92h-29.8l8.587 22.98-30.81-24.243c-6.03-4.74-6.257-9.859 1.516-9.596h39.9l15.658-34.345c5.01-10.166 22.49-4.26 16.163 8.08l-16.668 26.265h7.576c6.486-.216 6.87 5.9 3.03 9.596z"
            fill="#000"
          />
          <path
            d="M262.12 311.116l-17.678-47.84c3.887-5.966 6.532-14.51 6.06-29.528-7.624-9.916-17.01-14.195-26.263-18.897 7.253-6.73 15.017-14.091 17.172-25.543 1.781-10.323 6.48-18.626 12.627-25.927l8.082-23.486 7.576 23.486c6.672 7.26 11.165 15.974 13.797 25.927 2.46 10.359 8.613 18.545 16.785 25.543-9.304 5.37-19.62 8.845-26.428 18.897-2.23 11.57.346 20.976 4.821 29.528zM524.301 19.687l-20.708 63.64-136.876 17.172c.78 4.57 1.965 8.802 0 15.658l124.754 11.616-25.254 48.993-101.52-38.386c-1.211 5.32-2.954 10.243-6.06 14.142l77.78 57.579-35.86 24.244-52.527-63.135c-3.262 3.533-5.706 7.416-12.122 9.596l28.284 63.135-33.84 7.576-11.617-60.104c-22.628 8.477-36.712-23.625-15.152-31.82 44.704-15.066 57.953-50.412 30.304-112.127 9.507 7.035 18.646 15.818 26.264 31.82z"
            fill="#000"
          />
          <path
            d="M314.882 303.54l-5.051-16.92h29.8l-8.587 22.98 30.81-24.243c6.03-4.74 6.257-9.859-1.516-9.596h-39.9l-15.658-34.345c-5.01-10.166-22.49-4.26-16.162 8.08l16.667 26.265h-7.576c-6.485-.216-6.87 5.9-3.03 9.596z"
            fill="#000"
          />
        </svg>
      </div>
      <div className={opened ? 'titles-opened' : 'titles-closed'}>
        <RenderList header={header} handleClick={() => setOpened(!opened)} />
      </div>
    </div>
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

type RenderProps = {
  header: Props['header'];
  handleClick: () => void;
};

function RenderList({ header, handleClick }: RenderProps) {
  const titles = header.map((i) => (
    <p key={i} onClick={handleClick}>
      {i}
    </p>
  ));
  return (
    <>
      <div>
        <h1>Choose a game</h1>
        {titles}
      </div>
    </>
  );
}
