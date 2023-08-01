import { useCallback, useState } from "react";

const useBoolean = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  //! if we return func, wrap in useCallback;
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle];
};

export default useBoolean;
