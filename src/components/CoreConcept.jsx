export default function CoreConcept({image, title, description}) //using object destructuring to set the props values
{
  return(
      <li>
        {/* creating the props details and adding the conttents the component should display */}
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>

  ); // component created to provide details on the home page about the core concepts of react 
}