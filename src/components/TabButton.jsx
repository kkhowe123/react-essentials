export default function TabButton({children, onSelect}) //onSelect prop is use to 
{ 
    return(

        <li><button onClick={onSelect}>{children}</button></li> // using children prop to display the content between the TabButton component in th App components

    );
}