export function ItemTeam({textTeamMember, imageTeamMember, noMarginTop, noMarginBottom}) {
    return (
        <div className={`relative my-6 border-[3px] border-neutral-900 rounded-2xl h-[240px] ${ noMarginTop ? 'mt-0' : ''} ${ noMarginBottom ? 'mb-0' : ''}`}>
        <div className="absolute flex flex-col w-full h-full">
            <div className="flex-1 self-end p-3">
                <div className="items-center border-2 border-neutral-900 rounded-full bg-blue">
                    <span className="flex justify-center items-center w-10 h-10 text-4xl font-funky-star text-neutral-100 text-stroke-sm">?</span>
                </div>
            </div>

            <div className="rotate-[-5deg] flex justify-center mb-3">
                <span className="text-2xl font-funky-star text-yellow text-stroke-sm">{textTeamMember}</span>
            </div>
        </div>

        <img className="rounded-2xl w-full h-full object-cover object-top" src={imageTeamMember} alt=""/>
    </div>
    )
}