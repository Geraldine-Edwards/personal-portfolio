import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CloseButton from "./CloseButton";


const PrivacyPolicy = ({ onClose }: { onClose: () => void }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: "transparent" }}
    >
      <div className="max-w-lg w-full p-8 rounded shadow-lg bg-white text-neutral-900 relative">
        <CloseButton onClick={onClose} buttonRef={closeBtnRef} />
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
    </motion.div>
  );
};

export default PrivacyPolicy;