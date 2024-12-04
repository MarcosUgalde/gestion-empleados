import { useState } from "react";

export const useAuthStyle = (initialStatus) => {
  const [visibility, setVisibility] = useState(initialStatus);

  const toggleVisibility = () => setVisibility((prev) => !prev);
  return [visibility, toggleVisibility];
};
