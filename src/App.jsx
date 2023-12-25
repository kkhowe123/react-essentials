import { useState, Fragment } from 'react'; 
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
 
// storing the text to be displayed if no tabButton is selected in a variable
let tabContent = <p>Please select a topic</p>;
{/* using a confitional statement to display a text before a button is select when the page first loads */}
if(selectedTopic)
{
  tabContent = <div id= "tab-content"> 
  {/* below code is used to get the date from the EXAMPLE object in dat.js. The valuse it taken from the keys that are stored in the selected topic. */}


<h3>{EXAMPLES[selectedTopic].title }</h3> 
<p>{EXAMPLES[selectedTopic].description}</p>
<pre> 
<code>{EXAMPLES[selectedTopic].code}</code>

</pre>
  </div> }
  



  return (
    <>
      <Header />
      <main>

        <section id="core-concepts">  
        {/* to display the core concepts on the webpage */}
          <h2>Time to get started!</h2>
          <ul>
            {/* Using the map feature below to output the array of objects in data.js dynamically. This will help with the performance of the application and if one of the data is delete it won't break the application */}
            
            {CORE_CONCEPTS.map((conceptItem) =><CoreConcept  key={conceptItem.title}{...conceptItem}/>)} 

            
          </ul>

        </section> 
        <section id ="examples">
          <h2>Examples</h2>
          <menu>
           <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')} >Components</TabButton>  {/* onSelect will be used as a trigger when the button i clicked */}
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')} >JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')} >Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')} >States</TabButton>
            {/* using arrow function to pass identifiers to the onselct, that would assit with knowing which button was selected */}

          </menu>
          {/* displaying the content stored in  the tabContent based on the TabButtonselected */}
         {tabContent}
        </section>
       
      </main>
    </>
  );
}
export default App;
