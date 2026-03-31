import { useEffect } from "react";

function useFocusOnOpen<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  isOpen: boolean
) {
    useEffect(() => {
      if (isOpen && ref.current) {
      ref.current.focus();
    }
    }, [isOpen, ref]);
}

export default useFocusOnOpen