import { Children } from "react";

// using "...props" to create a props object to allow us to pass mulitple prps to <section> THIS IS DONE IN THE EVENT WE NEED TO CREATE NEWW PROPS TO BE PASS TO IT
export default function Section({title, id, children, ...props}) 
{
    return(
<section id={id}>
    <h2>{title}</h2>
    {children}
</section>

    );
}