import { useState } from 'react'; 
import { EXAMPLES } from './data.js';// importing an object with with propertyies containg key value pairs to be used to display on the tab-button 
import {CORE_CONCEPTS} from './data.js'; //importing the array from the data.js file 
import Header from "./components/Header/Header.jsx";
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {

const [selectedTopic, setSelectedTopic] = useState(null); //using the useState function to change the state of the app component

  function handleSelect(selectedButton)
  { //selectedButton => Components, JSX, Props, States
      setSelectedTopic(selectedButton);
      console.log(selectedButton);
  }
 

  return (
    <div>
      <Header />
      <main>

        <section id="core-concepts">  
        {/* to display the core concepts on the webpage */}
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept 
            /*Setting props for the components*/
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}/>

            <CoreConcept {...CORE_CONCEPTS[1]} //using the spread operator to extract the key value pairs from the array/
             />

            <CoreConcept {...CORE_CONCEPTS[2]} //using the spread operator to extract the key value pairs from the array/
             />

            <CoreConcept {...CORE_CONCEPTS[3]} //using the spread operator to extract the key value pairs from the array/
             />
          </ul>

        </section> 
        <section id ="examples">
          <h2>Examples</h2>
          <menu>
           <TabButton onSelect={() => handleSelect('components')} >Components</TabButton>  {/* onSelect will be used as a trigger when the button i clicked */}
            <TabButton onSelect={() => handleSelect('jsx')} >JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')} >Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} >States</TabButton>
            {/* using arrow function to pass identifiers to the onselct, that would assit with knowing which button was selected */}

          </menu>
          {/* using a confitional statement to display a text before a button is select when the page first loads */}
          {!selectedTopic ?<p>PLease select a topic</p> :<div id= "tab-content"> 
          {/* below code is used to get the date from the EXAMPLE object in dat.js. The valuse it taken from the keys that are stored in the selected topic. */}
       
        
        <h3>{EXAMPLES[selectedTopic].title }</h3> 
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre> 
      <code>{EXAMPLES[selectedTopic].code}</code>

        </pre>
          </div> }
          
        </section>
       
      </main>
    </div>
  );
}

export default App;
