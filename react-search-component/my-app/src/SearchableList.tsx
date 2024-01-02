import { Dispatch, SetStateAction, useState } from 'react';

type Props = {
  list: string[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export function SearchableList({ list }: { list: string[] }) {
  const [value, setValue] = useState('');

  return (
    <>
      <SearchBar list={list} value={value} setValue={setValue} />
      <MakeList list={list} value={value} setValue={setValue} />
    </>
  );
}

function SearchBar({ value, setValue }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        const targetValue = e.target.value;
        setValue(targetValue);
      }}
    />
  );
}

function MakeList({ value, list }: Props) {
  const filterList = list.filter((i) =>
    i.toLowerCase().includes(value.toLowerCase())
  );
  const items = filterList.map((i) => <li key={i}>{i}</li>);
  return items.length > 0 ? <ul>{items}</ul> : <span>No Matching Item</span>;
}
