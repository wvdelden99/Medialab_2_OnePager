import './App.css';
// Sections
import { Hero } from './section/Hero';
import { Team } from './section/Team';
import { Ontwerpvraag } from './section/Ontwerpvraag';
import { Ontwerprichtlijnen } from './section/Ontwerprichtlijnen';
import { OnsConcept } from './section/OnsConcept';
import { OnsProces } from './section/OnsProces';


function App() {
    return (
        <>
            <Hero />
            <Team />
            <Ontwerpvraag />
            <Ontwerprichtlijnen />
            <OnsConcept />
            <OnsProces />
        </>
    );
}

export default App;
