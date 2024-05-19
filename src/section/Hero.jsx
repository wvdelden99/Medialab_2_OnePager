// Components
import { LayoutContent } from '../components/layout/_layoutConent';
// Images
import logo from './../assets/static/logo/logo_team_ja_01.svg';
import icon_arrow_down from './../assets/static/icons/icon_arrow_down_01.svg';
import figure_01 from './../assets/static/figures/figure_01_rainbow_01.svg';
import figure_02 from './../assets/static/figures/figure_06_flower_and_hearts_01.svg';
import figure_03 from './../assets/static/figures/figure_07_flower_and_stars_01.svg';
import figure_04 from './../assets/static/figures/figure_02_shroom_01.svg';

export function Hero() {
    const handleScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="relative md:mt-10 mt-6 md:mb-20 mb-8 md:h-[90vh] h-[22.5vh]">
            <div className="absolute md:-mt-10 -mt-6 w-full md:h-screen h-[32.5vh] overflow-hidden">
                <img className="relative rotate-[-9deg] md:w-[320px] w-[100px] md:top-6 top-4 md:left-2 left-3" src={figure_01} alt=""/>
                <img className="absolute md:block hidden w-[240px] top-6 right-12" src={figure_02} alt=""/>
                <img className="absolute md:block hidden w-[200px] bottom-4 left-4" src={figure_03} alt=""/>
                <img className="absolute rotate-[-26deg] md:w-[260px] w-[100px] md:-bottom-16 -bottom-8 md:-right-[5%] -right-[8%]" src={figure_04} alt=""/>
            </div>

            <LayoutContent styleCenter styleBorder>
                <img className="flex-1 mt-8 w-[62.5%]" src={logo} alt=""/>

                <a href="#Team" className="relative flex items-center gap-1 md:mt-0 mt-6 md:mb-4 cursor-pointer z-10" onClick={handleScroll}>
                    <span className="md:text-2xl text-xs font-medium text-neutral-900">scroll down</span>
                    <img className="md:w-6 w-3 md:h-6 h-3" src={icon_arrow_down} alt=""/>
                </a>
            </LayoutContent>
        </div>
    )
}
