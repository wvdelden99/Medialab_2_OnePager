// Images
import figure_01 from './../../assets/static/figures/figure_03_envelope_01.svg';
import figure_02 from './../../assets/static/figures/figure_04_schoolpass_01.svg';
import figure_03 from './../../assets/static/figures/figure_05_star_01.svg';


export function ItemTeam({textTeamMember, textEmail, textCourse, textFunction, imageTeamMember, noMarginTop, noMarginBottom, backgroundColor}) {
    return (
        <div className={`box-wrapper | relative md:my-0 my-6 border-[3px] border-neutral-900 rounded-2xl md:max-w-[360px] w-full md:h-[360px] h-[240px] cursor-pointer ${ noMarginTop ? 'mt-0' : ''} ${ noMarginBottom ? 'mb-0' : ''}`}>
            <div className="absolute flex flex-col w-full h-full">
                <div className="flex-1 self-end p-3">
                    <div className="md:hidden items-center border-2 border-neutral-900 rounded-full bg-blue">
                        <span className="flex justify-center items-center w-10 h-10 text-4xl font-funky-star text-neutral-100 text-stroke-sm">?</span>
                    </div>
                </div>

                <div className="rotate-[-5deg] flex justify-center mb-3">
                    <span className="text-2xl font-funky-star text-yellow text-stroke-sm">{textTeamMember}</span>
                </div>
            </div>

            <div className={`box | absolute rounded-2xl w-full h-0 bottom-0 opacity-0 ${ backgroundColor }`}>
                <div className="flex flex-col justify-center gap-6 mx-auto max-w-[60%] h-full">
                    <div className="flex items-center gap-3 -ml-6">
                        <img className="w-12 h-12" src={figure_01} alt=""/>
                        <span className="text-xl font-medium text-neutral-900">{textEmail}</span>
                    </div>
                    <div className="flex items-center gap-3 -ml-6">
                        <img className="w-12 h-12" src={figure_02} alt=""/>
                        <span className="text-xl font-medium text-neutral-900">{textCourse}</span>
                    </div>
                    <div className="flex items-center gap-3 -ml-6">
                        <img className="w-12 h-12" src={figure_03} alt=""/>
                        <span className="text-xl font-medium text-neutral-900">{textFunction}</span>
                    </div>
                </div>
            </div>

            <img className="rounded-2xl w-full h-full object-cover object-top" src={imageTeamMember} alt=""/>
        </div>
    )
}