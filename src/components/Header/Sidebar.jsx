import { FaTimes } from "react-icons/fa";
import { FiHome, FiBookOpen, FiBriefcase, FiPhone } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Sidebar({ closeSidebar }) {
    return (
        <div className="block md:hidden w-65 h-full bg-white text-gray-900 fixed top-0 left-0 z-50 shadow-lg p-6 transition-transform transform duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-12">
                <div className="text-xl font-bold tracking-wide">Asem Academy</div>
                <FaTimes
                    className="text-gray-900 text-lg cursor-pointer hover:text-indigo-300 transition-colors duration-200"
                    onClick={closeSidebar}
                />
            </div>

            <div className="space-y-8">
                <div className="flex items-center space-x-4 text-sm hover:text-black cursor-pointer transition-colors duration-200">
                    <FiHome className="text-xl" />
                    <span>Ana Sayfa</span>
                </div>
                <div className="flex items-center space-x-4 text-sm hover:text-black cursor-pointer transition-colors duration-200">
                    <FiBookOpen className="text-xl" />
                    <span>Eğitimler</span>
                </div>
                <div className="flex items-center space-x-4 text-sm hover:text-black cursor-pointer transition-colors duration-200">
                    <FiBriefcase className="text-xl" />
                    <span>Kurumsal</span>
                </div>
                <div className="flex items-center space-x-4 text-sm hover:text-black cursor-pointer transition-colors duration-200">
                    <FiPhone className="text-xl" />
                    <span>İletişim</span>
                </div>
            </div>

            <div className="mt-12">
                <div className="text-md font-semibold mb-4">Sosyal Medya</div>
                <div className="flex space-x-6 text-md">
                    <a href="#" className="hover:text-indigo-300 transition-colors duration-200">
                        <BsFacebook />
                    </a>
                    <a href="#" className="hover:text-indigo-300 transition-colors duration-200">
                        <BsTwitter />
                    </a>
                    <a href="#" className="hover:text-indigo-300 transition-colors duration-200">
                        <BsLinkedin />
                    </a>
                    <a href="#" className="hover:text-indigo-300 transition-colors duration-200">
                        <BsInstagram />
                    </a>
                </div>
            </div>

            <div className="mt-12">
                <div className="text-md font-semibold mb-4">İletişim Bilgileri</div>
                <div className="text-sm space-y-2">
                    <div className="flex items-center space-x-2">
                        <span>Email:</span>
                        <span className="text-gray-900">info@website.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>Telefon:</span>
                        <span className="text-gray-900">+90 123 456 789</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span>Adres:</span>
                        <span className="text-gray-900">İstanbul, Türkiye</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
