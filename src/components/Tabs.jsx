// this is used as a wrapper componet for other components that needs to display a title and conent/description
export default function Tabs({children,buttons}){
    
    return(
    <>
    <menu>
        {buttons}
    </menu>
    {children}
    </>
); 

}