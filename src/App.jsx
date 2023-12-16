
import {CORE_CONCEPTS} from './data.js'; //importing the array from the data.js file 
import Header from "./components/Header/Header.jsx";
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSelect(selectedButton)
  { //selectedButton => Components, JSX, Props, States

      console.log("Hello World selected ");
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
           <TabButton onSelect={handleSelect} >Components</TabButton>  {/* onSelect will be used as a trigger when the button i clicked */}
            <TabButton onSelect={handleSelect} >JSX</TabButton>
            <TabButton onSelect={handleSelect} >Props</TabButton>
            <TabButton onSelect={handleSelect} >States</TabButton>

          </menu>

        </section>
       
      </main>
    </div>
  );
}

export default App;
