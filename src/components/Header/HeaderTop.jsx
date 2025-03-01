import { FaWhatsapp,FaPhoneAlt ,FaInstagram,FaGithub,FaLinkedin ,FaYoutube} from "react-icons/fa";

export default function HeaderTop()
{
    return(
        <div className="w-full  header-top flex row justify-between items-center px-5 py-3 text-white bg-gray-900">
            <div className="social-media">
                <ul className="flex row gap-4">
                    <li><FaInstagram /></li>
                    <li><FaGithub /></li>
                    <li><FaLinkedin /></li>
                    <li><FaYoutube /></li>
                </ul>
            </div>
            <div className="phone-main hidden md:block">
                <ul className="flex row gap-4">
                    <li className="flex row items-center gap-2"><FaPhoneAlt />+90 123 456 7789</li>
                    <li className="flex row items-center gap-2"><FaWhatsapp />+90 123 456 7789</li>
                </ul>
            </div>
        </div>
    )
}