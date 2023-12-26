import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import TabButton from "./TabButton.jsx";


export default function Examples()
{const [selectedTopic, setSelectedTopic] = useState(null); //using the useState function to change the state of the app component

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

    return(
        <Section title={"Examples"} id ="examples">
        <Tabs buttons={ 
        <>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')} >Components</TabButton>  {/* onSelect will be used as a trigger when the button i clicked */}
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')} >JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')} >Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')} >States</TabButton>
          {/* using arrow function to pass identifiers to the onselct, that would assit with knowing which button was selected */}
          {/* displaying the content stored in  the tabContent based on the TabButtonselected */}
        </>
        }>{tabContent}</Tabs>
     
      </Section>


    );
}