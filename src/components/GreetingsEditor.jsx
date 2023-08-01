import { useEffect, useRef, useState } from "react";
import useMousePosition from "../hooks/mousePosition";

const GreetingEditor = () => {
  const mousePosition = useMousePosition();

  //   const [mousePosition, setMousePosition] = useState({
  //     x: undefined,
  //     y: undefined,
  //   });

  //   useEffect(() => {
  //     const handleMouseMove = (e) => {
  //       setMousePosition({ x: e.pageX, y: e.pageY });
  //     };
  //     document.addEventListener("mousemove", handleMouseMove);
  //     return () => {
  //       document.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);

  return (
    <>
      <h1>
        Mouse position is: ({mousePosition.x}, {mousePosition.y})
      </h1>
    </>
  );
};

export default GreetingEditor;
