type CloseButtonProps = {
  onClick: () => void;
  buttonRef?: React.RefObject<HTMLButtonElement | null>
};

const CloseButton = ({ onClick, buttonRef }: CloseButtonProps) => (
  <button
    ref={buttonRef}
    onClick={onClick}
    className="absolute top-4 right-4 text-neutral-700 hover:text-neutral-900 text-lg font-bold"
    aria-label="Close Privacy Policy"
  >
    ×
  </button>
);

export default CloseButton;