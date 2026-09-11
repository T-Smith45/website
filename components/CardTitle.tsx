
type CardTitleProps ={
    title: string
}

export default function CardTitle({ title}:CardTitleProps ){
    return (
        <div className="inline-flex items-center w-full mt-2 px-4">
            <div className="dot"></div>
            <p className=" w-full text-center text-white mix-blend-difference text-xl ">{title}</p>
            <div className="dot"> </div>
        </div>
    ) 
}