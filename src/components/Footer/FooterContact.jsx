import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


export default function FooterContact() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">İletişim</h3>
      <ul>
        <li className="flex items-center mb-4">
          <FaEnvelope className="mr-3" />
          <span>info@asemacademy.com</span>
        </li>
        <li className="flex items-center mb-4">
          <FaPhoneAlt className="mr-3" />
          <span>+90 123 456 789</span>
        </li>
        <li className="flex items-center">
          <FaMapMarkerAlt className="mr-3" />
          <span>İstanbul, Türkiye</span>
        </li>
      </ul>
    </div>
  );
}
