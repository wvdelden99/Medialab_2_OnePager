// Components
import { LayoutContent } from '../components/layout/_layoutConent';
import { ItemImage } from './../components/content/ItemImage'; 
// Images
import image_01 from './../assets/static/images/image_01_interview_klassikaal_notes.jpg';
import image_02 from './../assets/static/images/image_02_erasmus_01.jpg';
import image_03 from './../assets/static/images/image_03_erasmus_02.jpg';
import image_04 from './../assets/static/images/image_04_erasums_03.jpg';
import image_05 from './../assets/static/images/image_05_erasmus_04.jpg';
// import image_07 from './../assets/static/images/image_07_miro_notes.png';
// import image_08 from './../assets/static/images/image_08_teams.png';
import image_09 from './../assets/static/images/image_09_brainstorm.png';
import image_10 from './../assets/static/images/image_10_brainstormsessie.png';
import image_11 from './../assets/static/images/image_11_teams.png';
import image_12 from './../assets/static/images/image_12_erasmus_05.jpg';
import image_13 from './../assets/static/images/image_13_erasmus_06.jpg';


export function OnsProces() {
    return (
        <LayoutContent header="Ons proces">
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Klassikaal Interview Online</h2>

                <div className="md:flex md:flex-wrap md:gap-10">
                    <ItemImage image={image_01}
                                widthSmall />
                    <ItemImage widthLarge />
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Aan het begin van ons ontwerpproces kregen we de gelegenheid om vragen te stellen aan Marlieke van het Erasmus MC voor 
                    verdieping over het bijhouden van vochtbalans. Hierdoor verkregen we waardevolle informatie over het volledige proces van 
                    vochtinname en -uitname bij patiënten. We leerden ook over de huidige uitdagingen waar verpleegkundigen mee te maken hebben. 
                    Het proces van vochtbalans monitoren is voor een lange tijd al handmatig geweest. Dit geldt voor zowel de patiënten die het 
                    moeten bijhouden als de verpleegkundigen die een overzicht moeten maken van de resultaten. Ondanks dat er een voedingsassistente 
                    is om de formulieren van de patiënten te checken, is het nog steeds lastig om te bepalen of de patiënten deze nauwkeurig hebben 
                    ingevuld. Wat van ons wordt verwacht is het versimpelen van het proces.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Observaties</h2>

                <div className="md:flex md:flex-wrap md:gap-10">
                    <ItemImage image={image_02}
                                widthSmall />
                    <ItemImage image={image_03}
                                widthLarge />
                </div>
                <div className="md:flex md:flex-wrap md:gap-10">
                    <ItemImage image={image_04}
                                widthLarge />
                    <ItemImage image={image_05}
                                widthSmall />
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Om eerst een beter beeld te krijgen van de afdeling Cardiologie op het Erasmus ziekenhuis, kregen we de gelegenheid om hier 
                    langs te komen voor een observatie. Door middel van een rondleiding van Marlieke kregen we te zien hoe de kamers van patiënten 
                    eruit zagen, op welke manier zij hun vochtinname en -uitscheiding bij moesten houden en op welke wijze de verpleegkundigen deze 
                    weer in het systeem dienden te noteren. Zo zagen we bijvoorbeeld dat patiënten dit via een papieren formulier moesten invullen en 
                    verpleegkundigen hiermee het vochtbalans handmatig moesten uitrekenen. Door middel van de observaties kregen we een beter beeld 
                    van het proces dat erbij komt kijken tijdens het bijhouden van het vochtbalans binnen het ziekenhuis en waar de eventuele kansen 
                    en pijnpunten liggen.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Affiity Clustering</h2>

                {/* <div className="md:flex md:flex-wrap md:gap-10">
                    <ItemImage image={{}}
                                widthSmall />
                    <ItemImage widthLarge />
                </div> */}

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

                {/* <div className="md:flex md:flex-wrap md:gap-10">
                    <ItemImage image={image_07}
                                widthSmall />
                    <ItemImage image={image_08}
                                widthLarge />
                </div> */}

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Gezien we geen interviews konden regelen voor verdere fieldresearch, besloten we om deskresearch uit te voeren. Hiermee wilden we 
                    meer inzicht krijgen in het probleem. Gedurende het onderzoek vonden wij artikelen over de vochtmeting van patiënten in intensieve 
                    zorg en hierdoor kozen wij als doelgroep patiënten in kritieke toestand. Dit, omdat wij veronderstelden dat verpleegkundigen 
                    accuraat de vochtbalans van deze patiënten moesten monitoren. We ontdekten dat nauwkeurigheid voor patiënten in kritieke 
                    toestand van belang is en dat foutmarges daar dus zo klein mogelijk moeten zijn. De resultaten van onze deskresearch hebben 
                    we meegenomen naar het aanpassen van onze ontwerpvraag en interviewvragen.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Brainstorm</h2>

                <div className="md:flex md:flex-wrap md:gap-10">
                    <ItemImage image={image_09}
                                widthSmall />
                    <ItemImage image={image_10}
                                widthLarge />
                </div>
                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Om concepten te bedenken hebben wij een brainstorm methode toegepast waarbij iemand een oplossing bedenkt in 2 minuten. Na 
                    deze 2 minuten geven we het blaadje door aan de volgende persoon die dan op de vorige oplossing moet doorgaan. De vraag die 
                    centraal stond bij deze brainstorm methode was: "Hoe kunnen we de foutmarges bij het meten van vochtinname en -uitscheiding 
                    door hartpatiënten zo veel mogelijk minimaliseren?"
                    De bedachte concepten hebben we in hokjes geplaatst en doormiddel van dot-voting hebben wij 3 concepten gekozen waar we 
                    mee door willen gaan.
                </p>
            </div>
            <div className="border-b-2 border-neutral-900 pb-6 md:mb-12 mb-8">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Concepten bedenken</h2>

                <div className="md:flex md:flex-wrap md:gap-10">
                    <ItemImage widthSmall />
                    <ItemImage image={image_11}
                                widthLarge />
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    Na het brainstormen hebben wij 3 concepten gekozen waar wij verder mee wilden. Met behulp van Chatgpt hebben wij deze concepten 
                    uitgewerkt zodat de functies en omgeving goed worden toegelicht. Omdat Chatgpt niet altijd perfect is hebben wij zelf nog een 
                    goed oog geworpen naar de teksten en aangepast waar nodig.
                    Als laatste hebben wij nog een pakkende naam voor elk concept bedacht, zodat ze makkelijk te onderscheiden zijn.
                </p>
            </div>
            <div className="pb-4">
                <h2 className="my-4 md:text-3xl text-lg font-segoe-script font-regular text-neutral-900">Interviews</h2>

                <div className="md:flex md:flex-wrap md:gap-10">
                    <ItemImage image={image_12}
                                widthSmall />
                    <ItemImage image={image_13}
                                widthLarge />
                </div>

                <p className="md:my-4 md:text-2xl text-lg font-regular text-neutral-900">
                    We wisten nog niet precies waar we ons op wilden richten, maar de interviews hielpen ons dit te bepalen. Door te verdiepen 
                    in het huidige proces en de ervaringen van patiënten en verpleegkundigen, ontdekten we de grootste kansen: het verbeteren van 
                    het vochtinnameproces, het automatiseren van het systeem en betere voorlichting aan patiënten over beperkte vochtinname. 
                    We hebben onze drie concepten aan de verpleegkundigen voorgelegd en feedback ontvangen. Hierdoor hebben we onze ontwerpvraag 
                    aangescherpt en de doelgroep vastgesteld: "Hoe kunnen we de foutmarges bij het meten van vochtinname door patiënten op de afdeling 
                    cardiologie minimaliseren?"
                </p>
            </div>
        </LayoutContent>
    )
}
