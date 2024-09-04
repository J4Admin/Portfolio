import { EMAIL } from "../../data/Globaldata";
import { FaEnvelope } from "react-icons/fa";
import "./style.css";

export default function Email() {
  if (!EMAIL) return null;

  return (
    <div className="email">
      <div className="email-icon-block">
      <FaEnvelope className="email-icon" />
      </div>
      <h3 className="email-title">Email</h3>
      <p className="email-details">{EMAIL}</p>
      <a
        href={`mailto:${EMAIL}`}
        className="email-button"
        aria-label={`Envoyer un e-mail à ${EMAIL}`}
      >
        Envoyer un email
      </a>
    </div>
  );
}
