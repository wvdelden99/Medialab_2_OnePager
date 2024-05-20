import './App.css';
// Sections
import { Hero } from './section/Hero';
import { Team } from './section/Team';
import { Ontwerpvraag } from './section/Ontwerpvraag';
import { OnsProces } from './section/OnsProces';
import { Concept01 } from './section/Concept01';
import { Concept02 } from './section/Concept02';
import { Concept03 } from './section/Concept03';



function App() {
    return (
        <>
            <Hero />
            <Team />
            <Ontwerpvraag />
            <OnsProces />
            <Concept01 />
            <Concept02 />
            <Concept03 />
        </>
    );
}

export default App;
