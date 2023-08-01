import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: undefined,
    y: undefined,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
