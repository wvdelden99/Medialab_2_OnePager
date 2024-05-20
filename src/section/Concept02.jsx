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

            <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">H2Order</h2>
            <p className="text-lg font-regular text-neutral-900">
                Via het interne systeem waar patiënten voedsel kunnen bestellen, worden vochtinnamegegevens automatisch verzameld 
                en naar een centraal systeem gestuurd. Elke consumptie wordt geregistreerd via de tablet, die direct van de producten 
                het vochtgehalte bekijkt en opslaat in het totaal voor die dag. Producten die zijn besteld, worden automatisch verwerkt 
                in het patiëntendossier, waardoor zorgverleners real-time inzicht hebben in de vochtinname van de patiënt. Aan de hand 
                van AI worden de bestelde producten geanalyseerd om aan het einde van de dag een aanbevelingen te genereren voor de 
                volgende dag, waardoor een gepersonaliseerd vochtinnameplan wordt gecreëerd.
            </p>
        </LayoutContent>
    )
}
