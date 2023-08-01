import { useCallback, useState } from "react";
import useBoolean from "../hooks/boolean";

const Toggling = () => {
  const [value, toggleValue] = useBoolean(true);

  //   const [value, setValue] = useState(true);

  //   //! if we return func, wrap in useCallback;
  //   const handleClick = useCallback(() => {
  //     setValue((v) => !v);
  //   }, []);

  const handleClick = () => {
    toggleValue();
  };

  return (
    <>
      <button onClick={handleClick}>{value ? "Hide" : "Show"}</button>
      {value && <h1>Click the button to hide this text.</h1>}
    </>
  );
};

export default Toggling;
