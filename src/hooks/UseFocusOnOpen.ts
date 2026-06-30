import { useEffect } from "react";

// T is a generic type parameter that must extend a HTMLElement
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