import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderButton from "./HeaderButton";
import HeaderTop from "./HeaderTop";
export default function Header() {
  return (
    <>
      <HeaderTop />
      <div className="w-full flex row justify-between items-center px-6 py-5">
        <HeaderLogo />
        <HeaderMenu />
        <HeaderButton />
      </div>
    </>
  );
}
