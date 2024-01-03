import { Dispatch, SetStateAction, useState } from 'react';

type Items = {
  id: number;
  title: string;
  content: string;
};

type List = {
  arr: Items[];
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};

export function Accordion({ arr }: { arr: Items[] }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <RenderTopic arr={arr} toggle={toggle} setToggle={setToggle} />
    </>
  );
}

function RenderTopic({ arr, toggle, setToggle }: List) {
  const numOfTopics = [];
  for (let i = 0; i < arr.length; i++) {
    numOfTopics.push(i);
  }

  const topic = numOfTopics.map((i) => (
    <>
      <button
        key={arr[i].id}
        onClick={() => {
          setToggle(!toggle);
        }}>
        {arr[i].title}
      </button>
      <span className={arr[i].title} style={{ display: toggle ? '' : 'none' }}>
        {arr[i].content}
      </span>
    </>
  ));
  return topic;
}
