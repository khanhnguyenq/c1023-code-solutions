import { useCallback, useEffect, useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);
  const data = useCallback(function getData() {
    // fetch data
    return { foo: 'bar' };
  }, []);

  useEffect(() => {
    data;
    setCounter((prev) => prev + 1);
  }, [data]);

  return <div>Fetching {counter} times</div>;
}
