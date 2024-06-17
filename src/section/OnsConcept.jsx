// Components
import { ItemImageFull } from "../components/content/ItemImageFull";
import { LayoutContent } from "../components/layout/_layoutConent";
// Images
import image_01 from './../assets/static/images/image_aquaware_01.png';
import image_02 from './../assets/static/images/image_wireframes_01.png';

export function OnsConcept() {
    return (
        <LayoutContent header="Ons concept">
             <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Aqauware</h2>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Aquaware is een innovatieve en slimme weegschaal die door zijn compacte ontwerp gemakkelijk overal 
                    mee naartoe kan worden genomen. Het apparaat heeft een handvat waaraan je een beker kunt hangen, waarna 
                    het nauwkeurig het gewicht van de inhoud meet. Deze slimme oplossing is ideaal voor patiënten, zowel 
                    binnen als buiten het ziekenhuis, om hun vochtinname nauwkeurig te monitoren.
                </p>
            </div>

            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">De weegschaal</h2>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    De weegschaal bestaat uit een diafragma die open en dichtgedraaid kan worden. Hierdoor kan het verscheidenen 
                    producten optillen en wegen. Van flesjes, blikjes, mokken en bekers tot zakjes, bananen, appels en meer. 
                    Op deze manier kan het dus vrijwel alle voedingsmiddelen die patiënten nuttigen op de cardiologie afdeling 
                    een weging maken. De weging word geassisteerd door een camera die de producten die aan de weegschaal hangen kan 
                    vastleggen en aan de hand van machine learning kan bepalen welk deel van het gewicht het daadwerkelijke 
                    voedingsmiddel bevat en welk deel bijvoorbeeld de mok, fles of zak is.
                </p>

                <p className="my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    De weegschaal bestaat uit een diafragma die open en dichtgedraaid kan worden. Hierdoor kan het verscheidenen 
                    producten optillen en wegen. Van flesjes, blikjes, mokken en bekers tot zakjes, bananen, appels en meer. 
                    Op deze manier kan het dus vrijwel alle voedingsmiddelen die patiënten nuttigen op de cardiologie afdeling 
                    een weging maken. De weging word geassisteerd door een camera die de producten die aan de weegschaal hangen kan 
                    vastleggen en aan de hand van machine learning kan bepalen welk deel van het gewicht het daadwerkelijke 
                    voedingsmiddel bevat en welk deel bijvoorbeeld de mok, fles of zak is.
                </p>

                <ItemImageFull image={image_01}
                                backgroundCover/>
            </div>

            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">De app</h2>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Om Aquaware voor alle patiënten bruikbaar en begrijpelijk te houden, is de app erg simpel.
                </p>
                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Er zijn slechts een aantal opties in de app;
                </p>

                <ul className="my-4 md:pl-3 md:list-disc">
                    <li className="md:text-2xl text-lg font-regular text-neutral-900">
                        Het bekijken van het overzicht van de vochtinname gedurende de dag
                    </li>
                    <li className="md:text-2xl text-lg font-regular text-neutral-900">
                        Knoppen om een nieuwe weging te starten van een genuttigd product óf om een tweede meting toe te voegen voor 
                        als een product niet volledig genuttigd is (Ontwerprichtlijn 4; No more half measures)
                    </li>
                    <li className="md:text-2xl text-lg font-regular text-neutral-900">
                        Mogelijkheid om de meting te corrigeren, mocht de weegschaal een fout hebben gemaakt
                    </li>
                    <li className="md:text-2xl text-lg font-regular text-neutral-900">
                        Waarschuwingen en informatie over het innemen van te veel (of te weinig) vocht, en de gevolgen hiervan voor de patiënt, 
                        zijn gezondheid en geneesproces (Ontwerprichtlijn 3; Snappen is genezen)
                    </li>
                    <li className="md:text-2xl text-lg font-regular text-neutral-900">
                        Aanbevelingen gebaseerd op de recente vochtinnames, op deze manier wordt de patiënt op weg geholpen met het bepalen welke 
                        consumpties geschikt zijn voor hem om in te nemen de volgende dag.
                    </li>
                    <li className="md:text-2xl text-lg font-regular text-neutral-900">
                        Door bij het installeren van de app de gebruiker eerst een stapsgewijze uitleg te geven, krijgt de patiënt alvast een idee 
                        over de functies en werkingswijze van de Aquaware app.
                    </li>
                    <li className="md:text-2xl text-lg font-regular text-neutral-900">
                        Na de stapsgewijze uitleg volgt ook een 'calibratie' waarbij de patiënten hun eigen fles kunnen wegen, zodat de weegschaal dit 
                        in het vervolg kan verrekenen als de patiënt een weging doet met deze fles.
                    </li>
                    <li className="md:text-2xl text-lg font-regular text-neutral-900">
                        De app kan zowel met de smartphone als met de tablet in het ziekenhuis gebruikt worden.
                    </li>
                </ul>

                <ItemImageFull image={image_02}
                                backgroundColor="bg-pink"/>
            </div>

            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">User-Feedback</h2>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    De informatie van de Aquaware weegschaal wordt automatisch doorgestuurd naar de Aquaware app. Via de app krijgen 
                    patiënten op een duidelijke en begrijpelijke manier informatie over hun vochtinname. Deze informatie bestaan uit 
                    visualisaties van de real-time tracking van alle wegingen van dranken. 
                    Zo kunnen patiënten hun maximaal toegestane vochtinname van de dag zien en deze ook koppelen aan hoeveel vocht ze 
                    al binnen hebben gekregen (Ontwerprichtlijn 3; Snappen is genezen). Zij krijgen ook een notificatie waarbij 
                    feedback wordt gegeven op hoeveel ze nog kunnen innemen. 
                </p>

                <p className="my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Naast dit krijgen patiënten ook informatie over het belang van hun vochtrestrictie en bijbehorende aanbevelingen. 
                    Moeten ze bijvoorbeeld minder of juist meer drinken? En waarom is het belangrijk dat patiënten op hun vochtinname 
                    letten? Door dit duidelijk aan de patiënt te communiceren, wordt de patiënt zich bewuster van het belang van het 
                    goed bijhouden van hun vochtinname en kan hij of zij hier bewuster mee omgaan (Ontwerprichtlijn 3; Snappen is genezen).
                </p>
            </div>

            <div className="pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Effect op de doelgroep</h2>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    In de huidige situatie vinden patiënten het lastig om hun vochtbalans bij te houden. Zij ervaren problemen bij het zorgvuldig 
                    invullen van hun vochtinname. Bij patiënten in kritieke toestand gebeurt dit ook. Bij hen is het geval dat zij het zelf niet 
                    kunnen controleren en verplegers hebben hiervoor weinig tijd. Terwijl het voor deze patiënten het juist belangrijk is om goed 
                    te kijken naar wat zij innemen.
                </p>

                <p className="my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Aquaware maakt het eenvoudiger voor patiënten om hun vochtinname bij te houden, zowel voor patiënten in Medium Care als voor 
                    patiënten in kritieke toestand. (Ontwerprichtlijn 2; No one left behind) Het invullen van de formulieren hoeft niet meer en 
                    alle informatie wordt automatisch doorgestuurd naar de Aquaware app. De patiënten hoeven het formulier niet handmatig in te 
                    vullen. Dit maakt het ook voor de verplegers makkelijker om alle data accuraat en overzichtelijk te houden. Door Aquaware 
                    hoeven verpleegkundigen minder tijd te besteden aan patiënten in Medium Care, waardoor ze meer tijd overhouden aan het meten 
                    van vochtinname bij patiënten in kritieke toestand.
                </p>

                <p className="my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Daarnaast krijgen de patiënten meer toelichting over hun vochtbalans en wat hiervoor gedaan moet worden, waardoor het voor ze 
                    begrijpelijk is waarom er bepaalde restricties zijn. (Ontwerprichtlijn 3; Snappen is genezen)
                </p>
            </div>
        </LayoutContent>
    )
}
