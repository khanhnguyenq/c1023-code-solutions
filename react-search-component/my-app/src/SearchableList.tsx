// import { Dispatch, SetStateAction, useState } from 'react';

import { useState } from 'react';

// type Props = {
//   list: string[];
//   value: string;
//   setValue: Dispatch<SetStateAction<string>>;
// };

// export function SearchableList({ list }: { list: string[] }) {
//   const [value, setValue] = useState('');

//   return (
//     <>
//       <SearchBar list={list} value={value} setValue={setValue} />
//       <MakeList list={list} value={value} setValue={setValue} />
//     </>
//   );
// }

// function SearchBar({ value, setValue }: Props) {
//   return (
//     <input
//       type="text"
//       value={value}
//       onChange={(e) => {
//         const targetValue = e.target.value;
//         setValue(targetValue);
//       }}
//     />
//   );
// }

// function MakeList({ value, list }: Props) {
//   const filterList = list.filter((i) =>
//     i.toLowerCase().includes(value.toLowerCase())
//   );
//   const items = filterList.map((i, index) => <li key={index}>{i}</li>);
//   return items.length > 0 ? <ul>{items}</ul> : <span>No Matching Item</span>;
// }

type Props = {
  list: string[];
};

export function SearchableList({ list }: Props) {
  const [value, setValue] = useState('');

  const filterList = list.filter((i) =>
    i.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );

  return (
    <>
      <SearchBar
        value={value}
        onType={(q) => {
          setValue(q);
        }}
      />
      <RenderList list={filterList} />
    </>
  );
}

type SearchBarProps = {
  value: string;
  onType: (e: string) => void;
};

function SearchBar({ value, onType }: SearchBarProps) {
  return (
    <input type="text" value={value} onChange={(e) => onType(e.target.value)} />
  );
}

type RenderListProps = {
  list: Props['list'];
};

function RenderList({ list }: RenderListProps) {
  const items = list.map((i, index) => <li key={index}>{i}</li>);
  return <ul>{items}</ul>;
}
