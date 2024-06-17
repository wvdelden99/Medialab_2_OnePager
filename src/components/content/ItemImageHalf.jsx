export function ItemImageHalf({image, backgroundColor, backgroundCover, heightDesktop}) {
    return (
        <div className={`border-[3px] border-neutral-900 rounded-2xl md:w-[calc(50%-0.5rem)] w-full h-[320px] ${ heightDesktop ? 'md:h-[720px]' : ''} ${ backgroundColor ? backgroundColor : 'bg-yellow'}`}>
             <img className={`rounded-2xl w-full h-full ${ backgroundCover ? 'object-cover' : 'object-contain'}`} src={image} alt=""/>
        </div>
    )
}
