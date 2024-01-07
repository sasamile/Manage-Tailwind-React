import Button from "./Button"

  const SeccionFooter = () => {
  return (
    <section className="bg-bright-red h-60 grid grid-cols-2 place-items-center gap-40 max-md:grid-cols-1 max-md:gap-0 max-md:text-center">
      <h2 className="text-white font-bold text-4xl w-[60%]">Simplify how your team Works today</h2>
      <div >
      <Button
        type="button"
        title="Get Started"
        variant="bg-white text-bright-red"


      />
      </div>
    </section>
  )
}
export default SeccionFooter
