import reactIMG from './assets/react-core-concepts.png';// importing the image to create a dynamic image 
import {CORE_CONCEPTS} from './data.js'; //importing the array from the data.js file 

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
} // function to generate a randm number to change the value of the description variable 

function Header ()
{ 
  const description = reactDescriptions[genRandomInt(2)];
  
  return(<header>
  <img src={reactIMG} alt="Stylized atom" />
  <h1>React Essentials</h1>
  <p>
    {description} React concepts you will need for almost any app you are
    going to build!
  </p>
</header>);


}

function CoreConcept(props)
{
  return(
      <li>
        {/* creating the props details and adding the conttents the component should display */}
        <img src={props.image} alt={props.title}/>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>

  ); // component created to provide details on the home page about the core concepts of react 
}

function App() {
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
        
       
      </main>
    </div>
  );
}

export default App;
