import Button from "../Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function HeaderButton() {
  const [status, setStatus] = useState(false);

  function statusChange() {
    setStatus(!status);
  }

  return (
    <>
      {status && <Sidebar closeSidebar={() => setStatus(false)} />}

      <Button className="hidden md:block py-2 px-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white  text-sm cursor-pointer rounded-lg shadow-lg hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 ease-in-out">
        Seviye Tespit Sınavı
      </Button>
      <RxHamburgerMenu
        onClick={statusChange}
        className="block md:hidden cursor-pointer text-2xl"
      />
    </>
  );
}
