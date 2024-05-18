// Components
import { LayoutContent } from '../components/layout/_layoutConent';
import { ItemImage } from './../components/content/ItemImage'; 

export function Concept01() {
    return (
        <LayoutContent header="Concept 1">
            <ItemImage image={{}}/>
            <ItemImage image={{}}/>
            <ItemImage image={{}}/>
            <ItemImage image={{}}/>
            <ItemImage image={{}}/>

            <h2 className="mb-4 text-lg font-regular text-neutral-900">Brainstorm</h2>
            <p className="text-lg font-regular text-neutral-900">
                Tekst over de brainstorm sessie hier
            </p>
        </LayoutContent>
    )
}
