import navbar from "./Resources";

export const BotonesPrincipal = () => {
  return (
    <a
      href="#"
      className="bg-bright-red text-vary-light-gray w-max py-4 px-12 rounded-full shadow-sm shadow-bright-red/30 max-md:hidden lg:block"
    >
      {navbar.btn}
    </a>
  );
};



 export const BotonHeroe = () => {
  return (
    <a
    href="#"
    className="bg-bright-red text-vary-light-gray w-max py-4 px-12 rounded-full shadow-xl shadow-bright-red/30 mx-auto md:mx-0  "
  >
    {navbar.btn}
  </a>
  )
}

export const BotonFooter = () => {
  return (
    <a
    href="#"
    className="text-bright-red bg-vary-light-gray w-max py-4 px-12 rounded-full shadow-xl  mx-auto md:mx-0  "
  >
    {navbar.btn}
  </a>
  )
}


