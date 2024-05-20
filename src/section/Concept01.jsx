// Components
import { LayoutContent } from '../components/layout/_layoutConent';
import { ItemImage } from './../components/content/ItemImage'; 

export function Concept01() {
    return (
        <LayoutContent header="Concept 1">
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

            <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">EetMeet</h2>
            <p className="text-lg font-regular text-neutral-900">
                'EetMeet’ biedt een innovatieve oplossing voor het nauwkeurig monitoren van zowel voedsel- als vochtinname gedurende de dag. 
                Het pakket bestaat uit een slimme broodtrommel en een geavanceerde drinkbeker, beide uitgerust met schermpjes voor real-time 
                tracking. De broodtrommel bevat een schermpje aan de bovenkant dat de vochtigheidsniveaus in de trommel weergeeft, terwijl de 
                drinkbeker constant het gewicht meet en bijhoudt of er vloeistof uit is gegaan of toegevoegd is. Aan het einde van de dag 
                berekent de beker automatisch de totale vochtinname op basis van de gemeten gegevens. Beide apparaten werken samen om een 
                volledig beeld te geven van de vochtinname van de patiënt, waardoor zorgverleners nauwkeurige informatie krijgen om de 
                hydratatieniveaus te monitoren en te beheren. Met ‘EetMeet’ wordt het eenvoudiger dan ooit om de gezondheid van de patiënt 
                te waarborgen en te optimaliseren.
            </p>
        </LayoutContent>
    )
}
