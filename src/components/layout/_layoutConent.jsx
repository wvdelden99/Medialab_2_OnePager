export function LayoutContent({children, header, styleCenter, styleBorder}) {
    return (
        <div className="mx-auto mb-20 md:w-[90%] w-[85%] h-full">
            {header &&
                <h1 className="md:-mb-6 -mb-5 md:px-10 px-4 md:text-7xl text-[2.5rem] font-funky-star text-yellow text-stroke tracking-[-2px]">{header}</h1>
            }

            <div className={`border-[3px] border-neutral-900 md:p-12 p-5 h-full bg-neutral-100 
                ${ styleCenter ? 'flex flex-col justify-center items-center' : ''} ${styleBorder ? 'md:rounded-3xl rounded-xl' : 'rounded-3xl'}`}>
                {children}
            </div>
        </div>
    )
}
