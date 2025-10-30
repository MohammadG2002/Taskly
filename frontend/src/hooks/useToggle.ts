import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [isCollapsed, setIsCollapsed] = useState(initialValue);

  const toggle = () => {
    setIsCollapsed((prev) => !prev);
  };
  return { isCollapsed, toggle };
};

export default useToggle;
