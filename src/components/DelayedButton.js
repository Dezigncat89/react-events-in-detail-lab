import React, { useEffect, useState } from 'react';

function onDelayedClick() {
  
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  const getCountTimeout = () => {
    setTimeout(() => {
      setTimeoutCount(countRef.current);
    }, 2000);
  };
  
   return (
     ...
  )
  
}
   
export default onDelayedLClick;
