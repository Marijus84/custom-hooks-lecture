// import { useState, useEffect } from "react";
import useCounter from "../hooks/useCounter";

const DecrementCounter = () => {
  //   const [counter, setCounter] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCounter((prevCounter) => prevCounter - 1);
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }, []);

  const count = useCounter(-2);

  return <h2>{count}</h2>;
};

export default DecrementCounter;
