  
  import { CORE_CONCEPTS } from "../data.js"; //importing the array from the data.js file 
  import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts(){
return(

    <section id="core-concepts">  
        {/* to display the core concepts on the webpage */}
          <h2>Time to get started!</h2>
          <ul>
            {/* Using the map feature below to output the array of objects in data.js dynamically. This will help with the performance of the application and if one of the data is delete it won't break the application */}
            
            {CORE_CONCEPTS.map((conceptItem) =><CoreConcept  key={conceptItem.title}{...conceptItem}/>)} 

        
          </ul>

     </section>

);

  }