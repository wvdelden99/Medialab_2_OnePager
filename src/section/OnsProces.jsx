// Components
import { LayoutContent } from '../components/layout/_layoutConent';
import { ItemImageHalf } from '../components/content/ItemImageHalf';
import { ItemImageFull } from '../components/content/ItemImageFull';
// Images
import image_01 from './../assets/static/images/image_erasums_02.jpg';
import image_02 from './../assets/static/images/image_erasmus_01.jpg';
import image_03 from './../assets/static/images/image_affinity_clustering_01.png';
import image_04 from './../assets/static/images/image_teams_01.png';
import image_05 from './../assets/static/images/image_brainstormsessie_01.png';
import image_06 from './../assets/static/images/image_teams_02.png';
import image_07 from './../assets/static/images/image_interview_01.png';
import image_08 from './../assets/static/images/image_customer_journey_01.png';
import image_09 from './../assets/static/images/image_insight_cards_01.png';
import image_10 from './../assets/static/images/image_insight_cards_02.png';
import image_11 from './../assets/static/images/image_ontwerprichtlijn_01.png';
import image_12 from './../assets/static/images/image_ontwerprichtlijn_02.png'
import image_13 from './../assets/static/images/image_ontwerprichtlijn_03.png';
import image_14 from './../assets/static/images/image_ontwerprichtlijn_04.png';
import image_15 from './../assets/static/images/image_illustration_01.png';
import image_16 from './../assets/static/images/image_illustration_02.png';
import image_17 from './../assets/static/images/image_illustration_03.png';
import image_18 from './../assets/static/images/image_tussenpresentatie_01.png';
import image_19 from './../assets/static/images/image_kill_your_darling_01.png';
import image_20 from './../assets/static/images/image_sketch_01.png';
import image_21 from './../assets/static/images/image_sketch_02.png';
import image_22 from './../assets/static/images/image_test_01.png';
import image_23 from './../assets/static/images/image_test_02.png';
import image_24 from './../assets/static/images/image_prototype_01.png';
import image_25 from './../assets/static/images/image_wireframes_02.png';
import image_26 from './../assets/static/images/image_test_03.png';
import image_27 from './../assets/static/images/image_test_04.png';
import image_28 from './../assets/static/images/image_prototype_02.png';
import image_29 from './../assets/static/images/image_prototype_03.png';
import image_30 from './../assets/static/images/image_wireframes_01.png';
import image_31 from './../assets/static/images/image_test_05.png';
import image_32 from './../assets/static/images/image_test_06.png';
import image_33 from './../assets/static/images/image_test_07.png';
import image_34 from './../assets/static/images/image_test_08.png';


export function OnsProces() {
    return (
        <LayoutContent header="Ons proces">
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Klassikaal Interview Online</h2>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Aan het begin van ons ontwerpproces kregen we de gelegenheid om vragen te stellen aan Marlieke van het Erasmus MC voor 
                    verdieping over het bijhouden van vochtbalans. Hierdoor verkregen we waardevolle informatie over het volledige proces van 
                    vochtinname en -uitname bij patiënten.
                </p>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    We leerden ook over de huidige uitdagingen waar verpleegkundigen mee te maken hebben. Het proces van vochtbalans monitoren 
                    is voor een lange tijd al handmatig geweest. Dit geldt voor zowel de patiënten die het moeten bijhouden als de verpleegkundigen 
                    die een overzicht moeten maken van de resultaten. Ondanks dat er een voedingsassistente is om de formulieren van de patiënten 
                    te checken, is het nog steeds lastig om te bepalen of de patiënten deze nauwkeurig hebben ingevuld. Wat van ons wordt verwacht 
                    is het versimpelen van het proces.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Observaties</h2>

                <div className="flex flex-wrap gap-4 my-4">
                    <ItemImageHalf image={image_01}
                                    backgroundCover
                                    heightDesktop/>
                    <ItemImageHalf image={image_02}
                                    backgroundCover
                                    heightDesktop/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Om eerst een beter beeld te krijgen van de afdeling Cardiologie op het Erasmus ziekenhuis, kregen we de gelegenheid 
                    om hier langs te komen voor een observatie. Door middel van een rondleiding van Marlieke kregen we te zien hoe de kamers 
                    van patiënten eruit zagen, op welke manier zij hun vochtinname en -uitscheiding bij moesten houden en op welke wijze 
                    de verpleegkundigen deze weer in het systeem dienden te noteren. 
                    Zo zagen we bijvoorbeeld dat patiënten dit via een papieren formulier moesten invullen en verpleegkundigen hiermee het 
                    vochtbalans handmatig moesten uitrekenen. Door middel van de observaties kregen we een beter beeld van het proces dat 
                    erbij komt kijken tijdens het bijhouden van het vochtbalans binnen het ziekenhuis en waar de eventuele kansen en pijnpunten 
                    liggen.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Affiity Clustering</h2>

                <div className="my-4">
                    <ItemImageFull image={image_03}
                                    backgroundCover/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Na verschillende deskresearches, een interview en een observatie uitgevoerd te hebben, konden we door middel van een Affinity 
                    Clustering de verzamelde inzichten op een overzichtelijke manier ordenen. Via post-its zijn de belangrijkste inzichten genoteerd 
                    en hebben we deze later per onderwerp bij elkaar gebracht in de vorm van een clustering. De Affinity Clustering maakte het voor 
                    ons mogelijk om later in het proces inzichten op een efficiënte manier terug te vinden en deze mee te nemen bij het kaderen van 
                    het probleem en het formuleren van de concepten.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Deskresearch</h2>

                <div className="my-4">
                    <ItemImageFull image={image_04}
                                    backgroundCover/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Gezien we geen interviews konden regelen voor verdere fieldresearch, besloten we om deskresearch uit te voeren. Hiermee wilden we 
                    meer inzicht krijgen in het probleem. Gedurende het onderzoek vonden wij artikelen over de vochtmeting van patiënten in intensieve 
                    zorg en hierdoor kozen wij als doelgroep patiënten in kritieke toestand. Dit, omdat wij veronderstelden dat verpleegkundigen 
                    accuraat de vochtbalans van deze patiënten moesten monitoren. We ontdekten dat nauwkeurigheid voor patiënten in kritieke toestand van 
                    belang is en dat foutmarges daar dus zo klein mogelijk moeten zijn. De resultaten van onze deskresearch hebben we meegenomen naar 
                    het aanpassen van onze ontwerpvraag en interviewvragen.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Brainstormen</h2>

                <div className="my-4">
                    <ItemImageFull image={image_05}
                                    backgroundCover/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Om concepten te bedenken hebben wij een brainstorm methode toegepast waarbij iemand een oplossing bedenkt in 2 minuten. Na deze 2 
                    minuten geven we het blaadje door aan de volgende persoon die dan op de vorige oplossing moet doorgaan. De vraag die centraal stond 
                    bij deze brainstorm methode was: "Hoe kunnen we de foutmarges bij het meten van vochtinname en -uitscheiding door hartpatiënten zo 
                    veel mogelijk minimaliseren?"
                    De bedachte concepten hebben we in hokjes geplaatst en doormiddel van dot-voting hebben wij 3 concepten gekozen waar we mee door 
                    willen gaan.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Concepten bedenken</h2>

                <div className="my-4">
                    <ItemImageFull image={image_06}
                                    backgroundCover/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Na het brainstormen hebben wij 3 concepten gekozen waar wij verder mee wilden. Met behulp van Chatgpt hebben wij deze concepten 
                    uitgewerkt zodat de functies en omgeving goed worden toegelicht. Omdat Chatgpt niet altijd perfect is hebben wij zelf nog een goed 
                    oog geworpen naar de teksten en aangepast waar nodig.
                    Als laatste hebben wij nog een pakkende naam voor elk concept bedacht, zodat ze makkelijk te onderscheiden zijn.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Interviews</h2>

                <div className="my-4">
                    <ItemImageFull image={image_07}
                                    backgroundCover/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    We wisten nog niet precies waar we ons op wilden richten, maar de interviews hielpen ons dit te bepalen. Door te verdiepen in het huidige 
                    proces en de ervaringen van patiënten en verpleegkundigen, ontdekten we de grootste kansen: het verbeteren van het vochtinnameproces, 
                    het automatiseren van het systeem en betere voorlichting aan patiënten over beperkte vochtinname. We hebben onze drie concepten aan de 
                    verpleegkundigen voorgelegd en feedback ontvangen. Hierdoor hebben we onze ontwerpvraag aangescherpt en de doelgroep vastgesteld: 
                    "Hoe kunnen we de foutmarges bij het meten van vochtinname door patiënten op de afdeling cardiologie minimaliseren?"
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Customer Journey</h2>

                <div className="my-4">
                    <ItemImageFull image={image_08}
                                    backgroundColor="bg-blue-light"/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Binnen het gekozen focuspunt ‘het verkleinen van de foutmarges bij vochtinname door patiënten’ wilden we kijken op welke punten in het 
                    proces er ruimte was voor verbetering. Door eerst de reis van de patiënt van begin tot eind in kaart te brengen, zagen we een aantal 
                    pijnpunten en kansen waar we met ons ontwerp aan konden werken. Een van deze punten was bijvoorbeeld het duidelijker maken van de 
                    verschillende maatbekers waaruit een patiënt kan drinken, zodat de vochtinname ook nauwkeuriger bijgehouden kan worden.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Insight Cards</h2>

                <div className="flex flex-wrap gap-4 my-4">
                    <ItemImageHalf image={image_09}
                                    heightDesktop/>
                    <ItemImageHalf image={image_10}
                                    heightDesktop
                                    backgroundColor="bg-red"/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Verder hebben we de belangrijkste onderzoeksresultaten vertaald naar inzichtkaarten. Deze kaarten dienen als een samenvatting van het 
                    onderzoek dat wij hebben verricht de afgelopen tijd. We zullen deze ook gebruiken als basis voor het formuleren van de concepten. De 
                    belangrijkste inzichtkaarten waren onder andere dat het bijhouden van de vochtinname vaak vergeten wordt, zowel door de patiënten als 
                    verpleegkundigen, en dat er regelmatig rekenfouten worden gemaakt. Beide inzichten wijzen erop dat het huidige systeem voor het bijhouden 
                    van vochtinname gevoelig is voor fouten.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Ontwerprichtlijnen</h2>

                <div className="flex flex-wrap gap-4 my-4">
                    <ItemImageHalf image={image_11}
                                    backgroundColor="bg-red"/>
                    <ItemImageHalf image={image_12}/>
                    <ItemImageHalf image={image_13}
                                    backgroundColor="bg-blue"/>
                    <ItemImageHalf image={image_14}
                                    backgroundColor="bg-pink"/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Nu we de inzichten hadden verwerkt in overzichtelijke insight cards, wilden we de volgende stap zetten door deze inzichten om te zetten 
                    in ontwerprichtlijnen. We selecteerden de vier belangrijkste inzichten en ontwikkelden voor elk een bijpassende ontwerprichtlijn.
                    We hebben deze ontwerprichtlijnen pakkende titels en krachtige, concrete ondertitels gegeven. Dit zorgt ervoor dat zowel ons team als de 
                    opdrachtgever altijd precies weet wat de vier kernwaarden zijn waaraan ons ontwerp moet voldoen. Door de ontwerprichtlijnen overzichtelijk 
                    te houden en ze altijd binnen handbereik te hebben, kunnen we ontwerpbeslissingen nemen die zeker aansluiten op de inzichten die we uit 
                    ons onderzoek hebben verkregen.
                </p>

                <ul className="md:pl-3 md:list-disc">
                    <li className="md:text-2xl text-lg font-regular text-neutral-900">
                        Van papier naar pixel; Het automatiseren van het proces dat nu nog op papier verloopt
                    </li>
                    <li className="md:text-2xl text-lg font-regular text-neutral-900">
                        No one left behind; Het zorgen voor alle patiënten, ongeacht op welke afdeling zij liggen en in welke staat zij zich bevinden
                    </li>
                    <li className="md:text-2xl text-lg font-regular text-neutral-900">
                        Snappen is genezen; Begrijpbare userfeedback om verwarring te voorkomen
                    </li>
                    <li className="md:text-2xl text-lg font-regular text-neutral-900">
                        No more half measures; Het vochtgehalte meten bij halfopgegeten en -gedronken eten en drinken
                    </li>
                </ul>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Drie concpeten</h2>

                <div className="md:flex md:justify-between my-4">
                    <div className="md:flex md:flex-col md:gap-4 md:w-2/5 w-full">
                        <div className="md:mb-0 mb-4 border-[3px] border-neutral-900 rounded-2xl w-full h-[320px] bg-blue">
                            <img className="rounded-2xl w-full h-full object-contain" src={image_15} alt="" />
                        </div>
                        <div className="md:mb-0 mb-4 border-[3px] border-neutral-900 rounded-2xl w-full h-[320px] bg-yellow">
                            <img className="rounded-2xl w-full h-full object-contain" src={image_16} alt="" />
                        </div>
                    </div>
                    <div className="border-[3px] border-neutral-900 rounded-2xl md:w-[calc(60%-1rem)] w-full md:h-[calc(640px+1rem)] h-[320px] bg-pink">
                        <img className="rounded-2xl w-full h-full object-contain" src={image_17} alt="" />
                    </div>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    '‘EetMeet’ biedt een innovatieve manier om voedsel- en vochtinname te monitoren met een slimme broodtrommel en 
                    drinkbeker. De broodtrommel toont vochtigheidsniveaus en de drinkbeker meet en registreert vloeistofverbruik. 
                    Aan het einde van de dag berekent de beker de totale vochtinname. Deze apparaten geven zorgverleners een compleet 
                    beeld van de hydratatie van de patiënt.
                </p>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    'H2Order verzamelt automatisch vochtinnamegegevens via het interne bestelsysteem voor voedsel dat het Erasmus MC heeft. 
                    Consumpties worden via een tablet geregistreerd en opgeslagen. Zorgverleners hebben hierdoor real-time inzicht in de 
                    vochtinname van de patiënt. AI analyseert bestelde producten en genereert aanbevelingen voor een gepersonaliseerd vochtinnameplan.
                </p>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    ‘Weigh To Go’ introduceert een slimme tafel die vochtinname bijhoudt. Producten op de tafel worden geanalyseerd, gewogen en herkend 
                    via Machine Learning. Het vochtgehalte van voedsel wordt berekend en restjes worden teruggeplaatst om de exacte vochtconsumptie 
                    te meten. Dit concept biedt een nauwkeurige manier om de gezondheid van de patiënt te monitoren.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Tussenpresentatie</h2>

                <div className="my-4">
                    <ItemImageFull image={image_18}
                                    backgroundCover/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Om de opdrachtgever op de hoogte te brengen en goed betrokken te houden bij het proces, hadden we voor hen een tussenpresentatie 
                    gepland staan waarin we ons proces tot nu toe en onze drie concepten konden presenteren.
                    Op die manier konden we tijdig feedback ontvangen van de opdrachtgever, nog vroeg in het proces. Zo voorkomen we dat we in een 
                    totaal andere richting gaan uitwerken dan de opdrachtgever eigenlijk had gedacht of gewild.
                    Bovendien konden we per concept waardevolle feedback vragen bij deze presentatie, zodat we een beter beeld hadden van hoe de 
                    opdrachtgever over de concepten denkt, welke hun voorkeur heeft en welk concept we het beste uit kunnen werken.
                    Kort samengevat was de feedback die we bij de tussenpresentatie hebben ontvangen als volgt;
                    De inzichten die we hebben verzameld zijn goed onderbouwd en het is duidelijk waar jullie deze inzichten vandaan hebben. 
                    De concepten zijn creatief, maar hebben nu weinig aansluiting op de inzichten. We moesten daarom proberen om de concepten meer 
                    te vormen, zodat deze aansluiten op de unieke en specifieke inzichten en ontwerprichtlijnen die we hebben gevonden.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Kill Your Darling</h2>

                <div className="my-4">
                    <ItemImageFull image={image_19}
                                    backgroundColor="bg-blue-light"/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Na het halen van de benodigdheden voor ons broodtrommel concept, kwam Bas ineens met het idee om het product compacter te maken. 
                    Het idee was om een soort schijf te maken die een flesje of beker kon vasthouden, om het zo te wegen als een soort bagage weegschaal. 
                    Hierdoor werd het concept meer portable, maar was het ook makkelijker te realiseren.
                    Na de Kill your Darling hebben wij nuttige feedback van de docenten en medestudenten gekregen waar we mee door konden gaan.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Schetsen</h2>

                <div className="flex flex-wrap gap-4 my-4">
                    <ItemImageHalf image={image_20}
                                    heightDesktop
                                    backgroundCover/>
                    <ItemImageHalf image={image_21}
                                    heightDesktop
                                    backgroundCover/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Om een beter beeld te krijgen van ons concept, maakten we schetsen en wireframes. Deze schetsen tonen de functies en werking van het concept, 
                    waarbij we verschillende variaties hebben uitgewerkt. Zo hadden we meerdere richtingen om op te kunnen gaan. We hebben deze schetsen 
                    gebruikt als een eerste prototype om het concept te valideren en eventuele aanpassingen te identificeren.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Test 1</h2>

                <div className="flex flex-wrap gap-4 my-4">
                    <ItemImageHalf image={image_22}
                                    heightDesktop
                                    backgroundCover/>
                    <ItemImageHalf image={image_23}
                                    heightDesktop
                                    backgroundCover/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Na de Kill Your Darling hebben wij schetsen gemaakt van hoe het prototype er uit zou moeten zien.
                    Deze schetsen hebben wij voorgelegd aan studenten en docenten zodat zij duidelijke feedback konden geven over ons huidige concept. 
                    Wij hebben deze schetsen laten zien en verteld hoe ons project in elkaar zat, wat ons doel was en hoe wij dat wilden bereiken. 
                    Daarna hebben wij gevraagd wat zij ervan vonden, of het compact genoeg is en of het praktisch is bijvoorbeeld.
                    Wij hebben na deze test genoeg feedback verzameld om door te gaan. Wij zijn gaan kijken naar de terugkoppeling van het product naar de 
                    app, push-berichten en het handmatig invoeren van de data.
                    Al deze feedback heeft er voor gezorgd dat wij verder konden en ons product nog beter konden maken.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Medium Fidelity Protptype</h2>

                <div className="flex flex-wrap gap-4 my-4">
                    <ItemImageHalf image={image_24}
                                    heightDesktop
                                    backgroundCover/>
                    <ItemImageHalf image={image_25}
                                    heightDesktop
                                    backgroundCover/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Na het testen met gebruikers hebben we besloten de feedback te verwerken in ons medium fidelity prototype. Dit hield in dat we 
                    zowel de fysieke als digitale prototypes verder gingen ontwerpen. Het fysieke prototype hebben we met behulp van lasersnijden 
                    uitgewerkt. We hebben vijf verschillende variaties (met en zonder knoppen) gemaakt om later met gebruikers te testen welke 
                    versie hun voorkeur had.
                    De user interface van de app hebben we ook zonder kleur ontworpen. Dit deden we om de functies van de app te valideren en te 
                    achterhalen wat gebruikers wel of niet wilden zien in de app. De ontvangen feedback, zoals het verbeteren van de koppeling 
                    tussen de tool en de app, hebben we gebruikt om het concept verder aan te scherpen en de prototypes uit te werken naar de 
                    uiteindelijke high fidelity versie.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Test 2</h2>

                <div className="flex flex-wrap gap-4 my-4">
                    <ItemImageHalf image={image_26}
                                    heightDesktop
                                    backgroundCover/>
                    <ItemImageHalf image={image_27}
                                    heightDesktop
                                    backgroundCover/>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Nadat we de medium fidelity prototype hadden gemaakt, hadden we enkele vragen die we graag wilden valideren door middel van 
                    testen. De belangrijkste vraag was of gebruikers de voorkeur gaven aan fysieke knoppen tijdens een meting, of dat ze alles 
                    via de app wilden besturen. Daarnaast wilden we weten, indien knoppen gewenst waren, in welke volgorde en vorm deze knoppen 
                    moesten zijn. Verder waren we benieuwd in hoeverre de uitgewerkte schermen van de app duidelijk waren. Door tijdens de 
                    tests studenten en docenten de prototypes daadwerkelijk te laten gebruiken, merkten we een duidelijke voorkeur voor het 
                    gebruik van de app zonder fysieke knoppen. Dit gaf hen meer overzicht over de meting en was ook makkelijker in gebruik.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">High Fidelity Prototype</h2>

                <div className="md:flex md:justify-between my-4">
                    <div className="md:flex md:flex-col md:gap-4 md:w-2/5 w-full">
                        <div className="md:mb-0 mb-4 border-[3px] border-neutral-900 rounded-2xl w-full h-[320px] bg-blue">
                            <img className="rounded-2xl w-full h-full object-cover" src={image_28} alt="" />
                        </div>
                        <div className="md:mb-0 mb-4 border-[3px] border-neutral-900 rounded-2xl w-full h-[320px] bg-yellow">
                            <img className="rounded-2xl w-full h-full object-cover" src={image_29} alt="" />
                        </div>
                    </div>
                    <div className="border-[3px] border-neutral-900 rounded-2xl md:w-[calc(60%-1rem)] w-full md:h-[calc(640px+1rem)] h-[320px] bg-blue-light">
                        <img className="rounded-2xl w-full h-full object-contain" src={image_30} alt="" />
                    </div>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Aangezien uit de tests bleek dat metingen volledig via de app moesten plaatsvinden, zijn we snel aan de slag gegaan met het 
                    digitaal uitwerken van deze schermen, inclusief de bijbehorende look-and-feel van het Erasmus MC. Tegelijkertijd werkten we 
                    verder aan het verbeteren van het fysieke gedeelte van ons prototype. Ons doel was om een universele tool te creëren die 
                    verschillende verpakkingen kan vastgrijpen zonder dat er diverse attachments nodig zijn. Door uitgebreid te experimenteren 
                    met 3D-prints en lasersnijden, hebben we uiteindelijk een werkend fysiek product kunnen realiseren.
                </p>
            </div>
            <div className="pb-4">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Test 3</h2>

                <div className="my-4">
                    <div className="md:flex flex-wrap gap-4">
                        <div className="mb-4 border-[3px] border-neutral-900 rounded-2xl md:w-[calc(33%-1rem)] w-full h-[320px] bg-yellow">
                            <img className="rounded-2xl w-full h-full object-cover" src={image_31} alt=""/>
                        </div>
                        <div className="mb-4 border-[3px] border-neutral-900 rounded-2xl md:w-[calc(66%-1rem)] w-full h-[320px] bg-yellow">
                            <img className="rounded-2xl w-full h-full object-cover" src={image_32} alt=""/>
                        </div>
                    </div>

                    <div className="md:flex flex-wrap gap-4">
                        <div className="md:mb-0 mb-4 border-[3px] border-neutral-900 rounded-2xl md:w-[calc(66%-1rem)] w-full h-[320px] bg-yellow">
                            <img className="rounded-2xl w-full h-full object-cover" src={image_33} alt=""/>
                        </div>
                        <div className="border-[3px] border-neutral-900 rounded-2xl md:w-[calc(33%-1rem)] w-full h-[320px] bg-yellow">
                            <img className="rounded-2xl w-full h-full object-cover" src={image_34} alt=""/>
                        </div>
                    </div>
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Zowel het fysieke prototype als de digitale app zijn bijna voltooid. Omdat de twee prototypes samen als één geheel moeten werken, 
                    besloten we nog één laatste usability-test uit te voeren. Met deze test wilden we vaststellen of de interacties tussen de 
                    fysieke weegschaal en de digitale app soepel verliepen en de laatste feedback verzamelen voordat we het eindresultaat tijdens 
                    de eindpresentatie aan de opdrachtgever tonen. Uit de tests bleek dat de werking van ons product duidelijk was voor de gebruikers 
                    en zij begrepen ook goed de link tussen het fysieke product en de app. Er waren echter enkele aanbevelingen voor optimalisatie, 
                    zoals het mogelijk compacter maken van het product. Ook was bijvoorbeeld niet duidelijk welke kant de schijven opgedraaid 
                    moeten worden om de opening kleiner of juist groter te maken. Deze punten nemen we mee in ons lijstje aan aanbevelingen.
                </p>
            </div>
        </LayoutContent>
    )
}
