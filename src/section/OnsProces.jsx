// Components
import { LayoutContent } from '../components/layout/_layoutConent';
import { ItemImage } from './../components/content/ItemImage'; 
// Images
import image_01 from './../assets/static/images/image_01_brainstorm.png';
import image_02 from './../assets/static/images/image_03_team.png';
import image_03 from './../assets/static/images/image_02_brainstorm.png'


export function OnsProces() {
    return (
        <LayoutContent header="Ons proces">
            <div className="border-b-2 border-neutral-900 pb-4">
                <h2 className="md:my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Brainstorm</h2>

                <div className="md:flex md:flex-wrap md:gap-10">
                    <ItemImage image={image_01}
                                widthSmall />
                    <ItemImage image={image_02}
                                widthLarge />
                </div>
                <div className="md:flex md:flex-wrap md:gap-10">
                    <ItemImage image={{}}
                                widthLarge />
                    <ItemImage image={image_03}
                                widthSmall />
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Tekst over de brainstorm sessie hier
                </p>
            </div>
            <div className="pt-4">
                <h2 className="md:my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Brainstorm</h2>

                <div className="md:flex md:flex-wrap md:gap-10">
                    <ItemImage image={{}}
                                widthSmall />
                    <ItemImage image={{}}
                                widthLarge />
                </div>
                <div className="md:flex md:flex-wrap md:gap-10">
                    <ItemImage image={{}}
                                widthLarge />
                    <ItemImage image={{}}
                                widthSmall />
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Tekst over de brainstorm sessie hier
                </p>
            </div>
        </LayoutContent>
    )
}
