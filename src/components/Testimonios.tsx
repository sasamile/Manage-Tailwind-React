import React from "react";
import { Carousel } from "../Resources/Resources";
import Button from "./Button";

const Testimonios = () => {
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
        <Button
          type="button"
          title="Get Started"
          variant="bg-bright-red text-vary-light-gray shadow-bright-red/30"
        />
      </div>
    </section>
  );
};

export default Testimonios;
