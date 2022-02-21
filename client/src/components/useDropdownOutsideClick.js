// Thanks to:
// https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks

import { useState, useEffect } from "react";

export const useDropdownOutsideClick = (element, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = (event) => {
      // If the active element exists and is clicked outside of
      if (element.current !== null && !element.current.contains(event.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, element]);

  return [isActive, setIsActive];
};
