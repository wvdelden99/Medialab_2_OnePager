// Components
import { LayoutContent } from '../components/layout/_layoutConent';
import { ItemImage } from './../components/content/ItemImage'; 
// Images



export function OnsProces() {
    return (
        <LayoutContent header="Ons proces">
            <h2 className="md:text-3xl text-lg font-regular text-neutral-900">Brainstorm</h2>

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

            <p className="text-lg font-regular text-neutral-900">
                Tekst over de brainstorm sessie hier
            </p>
        </LayoutContent>
    )
}
