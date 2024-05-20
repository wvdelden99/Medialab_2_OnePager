// Components
import { LayoutContent } from '../components/layout/_layoutConent';
import { ItemImage } from '../components/content/ItemImage'; 

export function Concept03() {
    return (
        <LayoutContent header="Concept 3">
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

            <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Weigh To Go</h2>
            <p className="text-lg font-regular text-neutral-900">
                Het ‘Weigh To Go’ concept introduceert een slimme tafel die nauwkeurig de vochtinname van de patiënt bij kan houden. Alle 
                bestelde producten worden altijd op de tafel geplaatst, zodat het geanalyseerd, gewogen en/of gemeten kan worden. Dranken 
                worden gemeten a.d.h.v. het gewicht, voedsel wordt gescand met een camera en wordt herkend d.m.v. Machine Learning. Zodra 
                de tafel herkent wat het voedsel is, wordt wederom het gewicht gemeten, zodat een berekening kan worden gemaakt van het 
                vochtgehalte in het product.
                Alle restjes moeten de patiënten terug plaatsen op de tafel, zodat een som gemaakt kan worden en zo exact berekend wordt 
                hoeveel vocht de patiënt daadwerkelijk genuttigd heeft. Dit concept biedt een innovatieve oplossing voor het nauwkeurig 
                monitoren van vochtinname en voedselconsumptie, wat essentieel is voor de gezondheid en het welzijn van de patiënt.
            </p>
        </LayoutContent>
    )
}
