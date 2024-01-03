import navbar from "../../Resources/Resources";
import { BotonesPrincipal } from "../../Resources/botones";
import Heroe from "../heroe/Heroe";


function Header() {
  return (
    
    <header className="mt-16">
      <nav className="wrapper h-20 flex items-center justify-between">
        <a href="#" className="w-1/3 max-w-[140px]">
          <img src={navbar.img} alt="logo" className="w-full" />
        </a>
        <input type="checkbox" id="menu" className="peer hidden" />

        <label
          htmlFor="menu"
          className="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-50 md:hidden"
        ></label>

        <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform z-40 md:static md:bg-none md:translate-x-0">
          <ul className="absolute inset-x-0 top-32 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold text-dark-blue shadow-2xl md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static md:gap-20 md:text-xl">
            {navbar.textoNav.map((navb, index) => (
              <li key={index}>
                <a href="#" className=" hover:text-dark-grayish-ble">{navb}</a>
              </li>
            ))}
          </ul>
        </div>
            <BotonesPrincipal/>
      </nav>
      <Heroe/>
      

    </header>
  );
}

export default Header;
