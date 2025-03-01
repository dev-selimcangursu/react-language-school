import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function FooterInfo() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Asem Academy</h3>
      <p className="text-sm mb-4">
        Eğitimde öncüyüz! Yenilikçi yöntemlerle bireysel ve kurumsal gelişim
        sağlıyoruz.
      </p>
      <div className="flex space-x-4 text-md">
        <a
          href="#"
          className="hover:text-indigo-300 transition-colors duration-200"
        >
          <BsFacebook />
        </a>
        <a
          href="#"
          className="hover:text-indigo-300 transition-colors duration-200"
        >
          <BsTwitter />
        </a>
        <a
          href="#"
          className="hover:text-indigo-300 transition-colors duration-200"
        >
          <BsLinkedin />
        </a>
        <a
          href="#"
          className="hover:text-indigo-300 transition-colors duration-200"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}
