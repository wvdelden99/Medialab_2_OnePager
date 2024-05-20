import { useState } from 'react';
// Images
import figure_01 from './../../assets/static/figures/figure_03_envelope_01.svg';
import figure_02 from './../../assets/static/figures/figure_04_schoolpass_01.svg';
import figure_03 from './../../assets/static/figures/figure_05_star_01.svg';


export function ItemTeam({textTeamMember, textEmail, textCourse, textFunction, imageTeamMember, noMarginTop, noMarginBottom, backgroundColor}) {
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const openTeamMember = () => {
        setIsBoxVisible(true);
    };
    const closeTeamMember = () => {
        setIsBoxVisible(false);
    };


    return (
        <div className={`box-wrapper | relative md:my-0 my-6 border-[3px] border-neutral-900 rounded-2xl md:max-w-[360px] w-full md:h-[360px] h-[240px] cursor-pointer ${ noMarginTop ? 'mt-0' : ''} ${ noMarginBottom ? 'mb-0' : ''}`}>
            <div className="absolute flex flex-col w-full h-full">
                <div className="flex-1 self-end p-3">
                    <div onClick={openTeamMember} className="md:hidden items-center border-2 border-neutral-900 rounded-full bg-blue">
                        <span className="flex justify-center items-center w-10 h-10 text-4xl font-funky-star text-neutral-100 text-stroke-sm">?</span>
                    </div>
                </div>

                <div className="rotate-[-5deg] flex justify-center mb-5">
                    <span className="md:text-5xl text-3xl font-segoe-script font-bold text-stroke-xs text-yellow">{textTeamMember}</span>
                </div>
            </div>

            <div className={`box | absolute rounded-2xl w-full bottom-0 ${ backgroundColor } ${ isBoxVisible ? 'h-full opacity-100' : 'h-0 opacity-0'}`}>
                <div className="">
                    <div className="">
                        <div onClick={closeTeamMember} className="flex justify-end p-3 w-full z-20">
                            <div className="md:hidden items-center border-2 border-neutral-900 rounded-full bg-blue">
                                <span className="flex justify-center items-center w-10 h-10 text-4xl font-funky-star text-neutral-100 text-stroke-sm">x</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center md:gap-6 gap-3 md:mt-0 -mt-2 mx-auto max-w-[60%] h-full">
                        <div className="flex items-center gap-3 md:-ml-6 -ml-3">
                            <img className="md:w-12 w-8 md:h-12 h-8" src={figure_01} alt=""/>
                            <span className="md:text-xl text-base font-medium text-neutral-900">{textEmail}</span>
                        </div>
                        <div className="flex items-center gap-3 md:-ml-6 -ml-3">
                            <img className="md:w-12 w-8 md:h-12 h-8" src={figure_02} alt=""/>
                            <span className="md:text-xl text-base font-medium text-neutral-900">{textCourse}</span>
                        </div>
                        <div className="flex items-center gap-3 md:-ml-6 -ml-3">
                            <img className="md:w-12 w-8 md:h-12 h-8" src={figure_03} alt=""/>
                            <span className="md:text-xl text-base font-medium text-neutral-900">{textFunction}</span>
                        </div>
                    </div>
                </div>
            </div>

            <img className="rounded-2xl w-full h-full object-cover object-top" src={imageTeamMember} alt=""/>
        </div>
    )
}
