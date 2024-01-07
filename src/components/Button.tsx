interface ButtonProps{
    type:"button" | "submit";
    title:string;
    variant:string
}


function Button ({type,title,variant}:ButtonProps){
    return(
    <button type={type}
    className={`${variant} w-max py-4 px-12 rounded-full shadow-xl mx-auto md:mx-0 `}>

        <a href="#">{title}</a>

    </button>
)}

export default Button;