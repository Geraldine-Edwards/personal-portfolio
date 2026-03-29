import { useEffect, useRef } from "react";
import { FocusTrap } from "focus-trap-react";
import CloseButton from "../utils/CloseButton";

type PrivacyPolicyProps = {
  onClose: () => void;
  isOpen: boolean;
}

const PrivacyPolicy = ({ onClose }: PrivacyPolicyProps) => {
  {/* Create a button reference */}
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  {/* Ensure Esc key can close the modal */}
  useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") {
          onClose();
        }
      }
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

  {/* Keep the keyboard user inside the overlay until it is closed using Focus Trap */}
  return (
    <FocusTrap
      focusTrapOptions={{
      initialFocus: false, // Disable automatic focus 
      onActivate: () => {
        // This runs after the trap is active
        if (closeBtnRef.current) {
          closeBtnRef.current.focus();
        }
      }
    }}
    >
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        style={{ background: "transparent" }}
      >
    
        <div className="max-w-lg w-full p-8 rounded shadow-lg bg-white text-neutral-900 relative">
          <CloseButton
            onClick={onClose}
            buttonRef={closeBtnRef}
            className="absolute top-4 right-4 text-neutral-700 hover:text-neutral-900 text-lg font-bold"
          />

          <h2 className="text-2xl font-serif mb-4">Privacy Policy</h2>
          <p className="mb-4">
            Your privacy is important to me. When you submit a message through the contact form, your name, email address, and message are sent securely to Formspree, a GDPR-compliant third-party service. Your information is used only to respond to your inquiry and is not shared or sold to anyone else.
          </p>
          <p className="mb-4">
            For more details on Formspree’s privacy practices, visit <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700" aria-label="Read Formspree's privacy policy (opens in a new tab)">Formspree Privacy Policy</a>.
          </p>
          <p>
            If you have any questions about how your data is handled, please contact me directly.
          </p>
        </div> 
      </div>
    </FocusTrap>
    
  );
};

export default PrivacyPolicy;