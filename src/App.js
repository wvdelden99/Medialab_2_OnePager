import './App.css';
// Sections
import { Hero } from './section/Hero';
import { Team } from './section/Team';
import { Ontwerpvraag } from './section/Ontwerpvraag';
import { OnsProces } from './section/OnsProces';
import { Concept01 } from './section/Concept01';



function App() {
    return (
        <>
            <Hero />
            <Team />
            <Ontwerpvraag />
            <OnsProces />
            <Concept01 />
        </>
    );
}

export default App;
