import { useEffect } from "react";

interface UseClickOutsideParams<T extends HTMLElement> {
  ref: React.RefObject<T>;
  onClickOutside: () => void;
}

function useClickOutside<T extends HTMLElement>({
  ref,
  onClickOutside,
}: UseClickOutsideParams<T>) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, onClickOutside]);
}

export default useClickOutside;
