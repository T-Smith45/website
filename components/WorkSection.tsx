
type WorkSectionProps = {
    imgUrl? :string
    linkText :string
    linkUrl? :string
}


export default function WorkSection({linkText, imgUrl = "#", linkUrl ="#"} : WorkSectionProps){
    return (
        <div className=" h-9/12 ">
            <div className=" h-full w-auto px-4 ">
                <div className="bg-black h-4/5 rounded-2xl"></div>
                <h3 className="text-black my-4 text-xl hover:underline" ><a href={linkUrl}>{linkText}</a></h3>
                <hr className="text-black mb-4"></hr>
            </div>   
        </div>
    )
}