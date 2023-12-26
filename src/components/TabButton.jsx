export default function TabButton({children,  isSelected, ...props}) //onSelect prop is use to 
{ 
    return(

        <li><button className={isSelected ? 'active': undefined} {...props}>{children}</button></li> // using children prop to display the content between the TabButton component in th App components on click will also use to display the details once a butoon is clicked

    );
}