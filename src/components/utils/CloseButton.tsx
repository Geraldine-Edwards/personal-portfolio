type CloseButtonProps = {
  onClick: () => void;
  buttonRef?: React.RefObject<HTMLButtonElement | null>
  children?: React.ReactNode;
  className?: string;
};

const CloseButton = ({ onClick, buttonRef, children, className }: CloseButtonProps) => (
  <button
    ref={buttonRef}
    onClick={onClick}
    className={className}
    aria-label="Close"
  >
  {children ? children : "×"}
  </button>
);

export default CloseButton;