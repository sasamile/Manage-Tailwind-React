import tablet from "../assets/images/bg-tablet-pattern.svg"

function Figure() {
  return (
    
    <figure className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src={tablet} alt="logo" className="absolute w-full -z-10 -top-24 -right-[-0%] max-w-2xl" />
    </figure>

  )
}

export default Figure