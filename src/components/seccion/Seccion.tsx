import { Carousel } from "../../Resources/Resources";
import { BotonHeroe } from "../../Resources/botones";
import { BotonFooter } from "../../Resources/botones";


export function SeccionMain() {
  return (
    <section className="wrapper text-center py-24 grid gap-12 md:grid-cols-2 md:gap-20">
      <article>
        <h2 className="text-3xl font-bold text-very-dark-blue mb-6 md:text-4xl">
          What's different about Manage?
        </h2>
        <p className="text-dark-grayish-ble  md:w-8/12 md:mx-auto md:text-left">
          Lorem ipsum dolor sit amet consectetur um nihil animi vero asperiores,
          amet quos dicta id facilis repudiandae quod quia numquam repellatlo
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          veritatis consequuntur. Minus unde ipsum reprehenderit assumenda
          tenetur, quaerat rerum cupiditate aperiam ullam corrupti illo
          praesentium quae corporis, accusantium facere harum.
        </p>
      </article>

      <div className="grid gap-12  ">
        <article className="space-y-4 md:space-y-6">
          <p className="bg-very-pale-red rounded-l-full font-bold flex items-center md:bg-transparent">
            <span className="bg-bright-red text-white px-6 rounded-full py-2 ">
              01
            </span>
            <span className="flex-1 p-2 md:flex-none">
              Track company-wide progress
            </span>
          </p>
          <p className="text-dark-grayish-ble text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            architecto quam accusamus dolores beatae error, in totam, laborum
            modi rem quae. Amet ex blanditiis quam animi fugiat hic dicta ut.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis itaque
            cupiditate possimus asperiores maiores.
          </p>
        </article>
        {/* fin  */}
        <article className="space-y-4 md:space-y-6">
          <p className="bg-very-pale-red rounded-l-full font-bold flex items-center md:bg-transparent">
            <span className="bg-bright-red text-white px-6 rounded-full py-2">
              02
            </span>
            <span className="flex-1 p-2 md:flex-none">
              Advanced built-in reports
            </span>
          </p>
          <p className="text-dark-grayish-ble text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            architecto quam accusamus dolores beatae error, in totam, laborum
            modi rem quae. Amet ex blanditiis quam animi fugiat hic dicta ut.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis itaque
            cupiditate possimus asperiores maiores.
          </p>
        </article>
        {/* fin  */}
        <article className="space-y-4 md:space-y-6">
          <p className="bg-very-pale-red rounded-l-full font-bold flex items-center md:bg-transparent">
            <span className="bg-bright-red text-white px-6 rounded-full py-2">
              03
            </span>
            <span className="flex-1 p-2 md:flex-none ">
              Everlything you need in one place
            </span>
          </p>
          <p className="text-dark-grayish-ble text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            architecto quam accusamus dolores beatae error, in totam, laborum
            modi rem quae. Amet ex blanditiis quam animi fugiat hic dicta ut.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis itaque
            cupiditate possimus asperiores maiores.
          </p>
        </article>
        {/* fin  */}
      </div>
    </section>
  );
}

export function SeccionMain2() {
  return (
    <section className="my-40">
      <h2 className="text-3xl text-center font-bold text-very-dark-blue mb-6 md:text-4xl ">
        What they've said
      </h2>

      <div className="w-[90%] grid gap-8 grid-cols-3 mx-auto max-sm:grid-cols-1 max-sm:gap-0">
        {Carousel.map((carousel, index) => (
          <div
            className=" text-center grid place-items-center gap-8 p-8 mb-8"
            key={index}
          >
            <img src={carousel.img} alt="lgo" className="w-36" />
            <p className="text-2xl font-bold ">{carousel.nombre}</p>
            <p className="text-dark-grayish-ble">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              repudiandae corporis vitae quos aperiam facere excepturi rerum
              consequuntur eos veniam, mollitia explicabo quam minus tempore
              voluptatibus voluptatem fugiat alias distinctio.
            </p>
          </div>
        ))}
      </div>
      <div className="grid place-items-center mb-4">
          <BotonHeroe />
        </div>
    </section>
  );
}


 export const SeccionFooter = () => {
  return (
    <section className="bg-bright-red h-60 grid grid-cols-2 place-items-center gap-40 max-md:grid-cols-1 max-md:gap-0 max-md:text-center">
      <h2 className="text-white font-bold text-4xl w-[60%]">Simplify how your team Works today</h2>
      <div >
      <BotonFooter/>
      </div>
    </section>
  )
}


