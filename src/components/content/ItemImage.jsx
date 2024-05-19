export function ItemImage({image, widthSmall, widthLarge}) {
    return (
        <div className={`my-6 border-[3px] border-neutral-900 rounded-2xl h-[320px] bg-pink ${ widthSmall ? 'xl:w-[32%] md:w-[30%]' : '' } ${ widthLarge ? 'xl:w-[64%] md:w-[60%]' : ''}`}>
            <img className="rounded-2xl w-full h-full object-cover" src={image} alt=""/>
        </div>
    )
}
