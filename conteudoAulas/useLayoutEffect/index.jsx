import { useLayoutEffect, useRef, useState } from 'react';

export const Home = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handleClick = () => {
    setCounted((c) => [...c, Number(c.slice(-1)) + 1]);
  };

  return (
    <>
      <button onClick={handleClick}>Count: {counted.slice(-1)}</button>
      <div ref={divRef} style={{ height: '100px', width: '100px', overflow: 'scroll' }}>
        {counted.map((c) => (
          <p key={c}>{c}</p>
        ))}
      </div>
    </>
  );
};
