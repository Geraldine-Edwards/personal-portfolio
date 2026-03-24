import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = ({ onPrivacyClick }: { onPrivacyClick: () => void }) => (
  <footer className="flex flex-col items-center py-6 bg-transparent">
    <div className="flex gap-6 mb-4">
      <a
        href="https://www.linkedin.com/in/geraldine-edwards-"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-neutral-700 hover:text-blue-700"
      >
        <FaLinkedin size={40} />
      </a>
      <a
        href="https://github.com/Geraldine-Edwards"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-neutral-700 hover:text-black"
      >
        <FaGithub size={40} />
      </a>
    </div>
    <button
      type="button"
      aria-haspopup="dialog"
      className="underline text-sm font-medium text-neutral-700 hover:text-blue-700 transition-colors mb-2"
      onClick={onPrivacyClick}
    >
      Privacy Policy
    </button>
    <div className="text-sm text-neutral-600">
      &copy; {new Date().getFullYear()} Geraldine Edwards. All rights reserved.
    </div>
  </footer>
);

export default Footer;