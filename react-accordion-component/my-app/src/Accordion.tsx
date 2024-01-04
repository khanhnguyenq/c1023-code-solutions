import { useState } from 'react';

type Items = {
  id: number;
  title: string;
  content: string;
};

export function Accordion({ arr }: { arr: Items[] }) {
  const [id, setId] = useState(0);

  const item = arr.map((i) => (
    <RenderTopic item={i} key={i.id} id={id === i.id} setId={setId} />
  ));
  return item;
}

type List = {
  item: Items;
  id: boolean;
  setId: (num: number) => void;
};

function RenderTopic({ item, id, setId }: List) {
  return (
    <>
      <button
        onClick={() => {
          if (id === true) {
            setId(0);
          } else {
            setId(item.id);
          }
        }}>
        {item.title}
      </button>
      <span style={{ display: id ? '' : 'none' }}>{item.content}</span>
    </>
  );
}
