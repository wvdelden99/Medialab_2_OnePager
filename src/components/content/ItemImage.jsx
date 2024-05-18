export function ItemImage({image}) {
    return (
        <div className="my-6 border-[3px] border-neutral-900 rounded-2xl h-[320px] bg-pink">
            <img className="rounded-2xl w-full h-full object-cover" src={image} alt=""/>
        </div>
    )
}
