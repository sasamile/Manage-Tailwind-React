import { heroe } from "../../Resources/Resources";
import { BotonHeroe } from "../../Resources/botones";
import ilutracion from "../../assets/images/illustration-intro.svg";

function Heroe() {
  return (
      <section className="wrapper grid gap-8 justify-items-center pb-12 items-center md:grid-cols-2 md:py-24">
      <img src={ilutracion} alt="ilustracion" className="w-full max-w-lg md:order-1" />

      <article className="text-center space-y-6 md:text-left md:space-y-8  md:max-w-lg">
        <h1 className="text-4xl font-bold text-very-dark-blue md:text-6xl" >{heroe.titulo}</h1>
        <p className="text-dark-grayish-ble text-lg ">{heroe.texto}</p>
        <br />
        <br />
        <BotonHeroe />
      </article>
    </section>
  );
}

export default Heroe;
