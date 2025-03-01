import FooterContact from "./FooterContact";
import FooterInfo from "./FooterInfo";
import FooterCourses from "./FooterCourses";
import FooterInstitutional from "./FooterInstitutional";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r  to-gray-900 from-indigo-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterInfo />
          <FooterCourses />
          <FooterInstitutional />
          <FooterContact />
        </div>
        <div className="mt-10 border-t border-indigo-500 pt-6 text-center text-sm">
          <p>© 2025 Asem Academy. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
