// this is used as a wrapper componet for other components that needs to display a title and conent/description
export default function Tabs({children,buttons, buttonsContainer = 'menu'}){
    //"menu" is used to set the default value of the prop buttonContaciner
    const ButtonsContainer = buttonsContainer; 
    //above code is used to set the name of the ButtonContainer below to one of the build in html tags eg div,menu, ul,li//
    return(
    <>
    <ButtonsContainer>
        {buttons}
    </ButtonsContainer>
    {children}
    </>
); 

}