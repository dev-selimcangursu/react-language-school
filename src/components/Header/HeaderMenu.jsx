import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <ul className="hidden md:flex row justift-between items-center gap-4">
      <li>
        <Link to="/">Anasayfa</Link>
      </li>
      <li className="relative group">
        Eğitimler
        <div className="hidden z-100 absolute left-0 w-64 p-4 shadow-lg bg-white text-gray-800 rounded-lg group-hover:flex transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100">
          <ul className="space-y-2">
            <li className="hover:bg-gray-100 py-2 px-2 text-sm rounded-md cursor-pointer transition-colors duration-300">
              Genel İngilizce Eğitimi
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm  rounded-md cursor-pointer transition-colors duration-300">
              Akademik Sınav Eğitimleri
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm  rounded-md cursor-pointer transition-colors duration-300">
              Özel Ders Programları
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm rounded-md cursor-pointer transition-colors duration-300">
              Online Tesol Eğitimi
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm  rounded-md cursor-pointer transition-colors duration-300">
              Diğer Yabancı Dil Eğitimleri
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm  rounded-md cursor-pointer transition-colors duration-300">
              Çocuklar İçin İngilizce Kursu
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm  rounded-md cursor-pointer transition-colors duration-300">
              İş İngilizcesi Eğitimi
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm  rounded-md cursor-pointer transition-colors duration-300">
              YKS Dil, YDT Hazırlık Kursu
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm  rounded-md cursor-pointer transition-colors duration-300">
              Online İngilizce Eğitimi
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm  rounded-md cursor-pointer transition-colors duration-300">
              İngilizce Yaz Okulu
            </li>
          </ul>
        </div>
      </li>
      <li className="relative group">
        Kurumsal
        <div className="hidden z-100 absolute left-0 w-50 p-4 shadow-lg bg-white text-gray-800 rounded-lg group-hover:flex transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100">
          <ul className="space-y-2">
            <li className="hover:bg-gray-100 py-2 px-2 text-sm rounded-md cursor-pointer transition-colors duration-300">
              Hakkımızda
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm  rounded-md cursor-pointer transition-colors duration-300">
              Referanslarımız
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm  rounded-md cursor-pointer transition-colors duration-300">
              Blog
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm rounded-md cursor-pointer transition-colors duration-300">
              Sıkça Sorulan Sorular
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm  rounded-md cursor-pointer transition-colors duration-300">
              Öğrenci Yorumları
            </li>
            <li className="hover:bg-gray-100 py-2 px-2 text-sm  rounded-md cursor-pointer transition-colors duration-300">
              Neden Biz ?
            </li>
          </ul>
        </div>
      </li>

      <li>İletişim</li>
    </ul>
  );
}
