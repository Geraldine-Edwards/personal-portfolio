import React from "react";

type CloseButtonProps = {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
};

const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ onClick, children, className }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={className}
        aria-label="Close button"
      >
        {children ? children : "×"}
      </button>
    );
  }
);
export default CloseButton;