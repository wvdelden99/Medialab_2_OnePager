// Components
import { LayoutContent } from '../components/layout/_layoutConent';
import { ItemImage } from '../components/content/ItemImage'; 

export function Concept02() {
    return (
        <LayoutContent header="Concept 2">
            <div className="md:flex md:flex-wrap md:gap-10">
                <ItemImage image={{}}
                            widthSmall/>
                <ItemImage image={{}}
                            widthLarge/>
            </div>
            <div className="md:flex md:flex-wrap md:gap-10">
                <ItemImage image={{}}
                            widthLarge/>
                <ItemImage image={{}}
                            widthSmall/>
            </div>

            <p className="text-lg font-regular text-neutral-900">
                Tekst over de brainstorm sessie hier
            </p>
        </LayoutContent>
    )
}
