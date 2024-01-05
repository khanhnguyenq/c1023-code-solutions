import { useState } from 'react';

type Items = {
  id: number;
  title: string;
  content: string;
};

export function Accordion({ arr }: { arr: Items[] }) {
  const [id, setId] = useState(0);

  const item = arr.map((i) => (
    <RenderTopic
      item={i}
      key={i.id}
      boolean={id === i.id}
      handleClick={() => {
        if (id === i.id) {
          setId(0);
        } else {
          setId(i.id);
        }
      }}
    />
  ));
  return item;
}

type RenderTopicProps = {
  item: Items;
  boolean: boolean;
  handleClick: () => void;
};

function RenderTopic({ item, boolean, handleClick }: RenderTopicProps) {
  return (
    <>
      <button onClick={handleClick}>{item.title}</button>
      <span style={{ display: boolean ? '' : 'none' }}>{item.content}</span>
    </>
  );
}
