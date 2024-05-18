export function LayoutContent({children, header, styleCenter, styleBorder}) {
    return (
        <div className="mx-auto mb-6 w-[85%] h-full">
            {header &&
                <h1 className="-mb-5 px-4 text-[2.5rem] font-funky-star text-yellow text-stroke tracking-[-2px]">{header}</h1>
            }

            <div className={`border-[3px] border-neutral-900 p-5 h-full bg-neutral-100 
                ${ styleCenter ? 'flex flex-col justify-center items-center' : ''} ${styleBorder ? 'rounded-xl' : 'rounded-3xl'}`}>
                {children}
            </div>
        </div>
    )
}
