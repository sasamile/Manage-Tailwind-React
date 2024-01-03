import { SeccionFooter } from "../seccion/Seccion";
import facebok from "../../assets/images/icon-facebook.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import icono from "../../assets/images/logo.svg";
import navbar from "../../Resources/Resources";

function Footer() {
  return (
    <footer>
      <SeccionFooter />
      <section className="bg-very-dark-blue h-full text-2xl ">
        <div className="w-[80%] mx-auto h-full py-28 grid grid-cols-4 gap-28 max-lg:grid-cols-2">
          <div className="grid gap-28 max-lg:col-span-2 max-lg:place-items-center ">
            <img src={icono} alt="" className=" bg-white rounded-2xl p-4 "/>
            <div className="flex gap-8 max-md:gap-28">
              <img src={facebok} alt="" />
              <img src={instagram} alt="" />
              <img src={pinterest} alt="" />
              <img src={youtube} alt="" />
            </div>
          </div>
          {/* fin */}
          <div>
            <ul className="grid gap-8 max-lg:justify-end">
              {navbar.textoNav.map((navb, index) => (
                <li className="text-white" key={index}>
                  <a href="#">{navb}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* fin  */}
          <div>
            <ul className="grid gap-8 text-white">
              <li>Coreers</li>
              <li>Community</li>
              <li>Privacy Polloy</li>
            </ul>
          </div>
          {/* fin  */}
          <div className="grid gap-28 col-span-1 max-lg:col-span-2 max-lg:place-items-center ">
            <div className="flex">
              <input type="text" placeholder="updates in your inbox" className="h-8 rounded-full text-center py-8 w-[70]"  />
              <button className="bg-bright-red w-28 rounded-full  ml-2">Go</button>
            </div>
            <div>
              <p className="text-white text-lg">Copyright 2020 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
