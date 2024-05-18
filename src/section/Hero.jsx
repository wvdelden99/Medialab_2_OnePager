// Components
import { LayoutContent } from '../components/layout/_layoutConent';
// Images
import logo from './../assets/static/logo/logo_team_ja_01.svg';
import figure_01 from './../assets/static/figures/figure_01_rainbow_01.svg';
import figure_02 from './../assets/static/figures/figure_02_shroom_01.svg';

export function Hero() {
    return (
        <div className="relative md:my-10 my-6 md:h-[90vh] h-[22.5vh]">
            <div className="absolute md:-mt-4 -mt-1 -mb-6 w-full h-full overflow-hidden">
                <img className="relative rotate-[-9deg] md:w-[320px] w-[100px] top-0 left-2" src={figure_01} alt=""/>
                <img className="absolute rotate-[-26deg] md:w-[260px] w-[100px] -bottom-16 md:-right-[5%] -right-[8%]" src={figure_02} alt=""/>
            </div>

            <LayoutContent styleCenter styleBorder>
                <img className="flex-1 mt-8 w-[62.5%]" src={logo} alt=""/>

                <div className="flex mt-4">
                    <a href="/" className="md:text-2xl text-base font-medium text-neutral-900">scroll down</a>
                    <img className="" src={{}} alt=""/>
                </div>
            </LayoutContent>
        </div>
    )
}