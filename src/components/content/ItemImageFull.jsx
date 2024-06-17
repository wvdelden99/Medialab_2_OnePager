export function ItemImageFull({image, backgroundColor, backgroundCover}) {
    return (
        <div className={`my-8 border-[3px] border-neutral-900 rounded-2xl w-full md:h-[720px] h-[320px] ${ backgroundColor ? backgroundColor : 'bg-yellow'}`}>
             <img className={`rounded-2xl w-full h-full ${ backgroundCover ? 'object-cover' : 'object-contain' }`} src={image} alt=""/>
        </div>
    )
}
