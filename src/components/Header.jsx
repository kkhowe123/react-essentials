import reactIMG from '../assets/react-core-concepts.png';// importing the image to create a dynamic image 

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
} // function to generate a randm number to change the value of the description variable 


export default function Header ()
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