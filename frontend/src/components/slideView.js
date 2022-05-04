import {useState} from "react"

function SlideView(props){
    const [open ,setOpen]=useState(true)
    const [isOpen,setIsOpen]=useState(false)
   
    const openIt=()=>{ setIsOpen(!isOpen)}
    return(
        
         <div>
               {props.view && props.items.slides.map((slide,index)=>{
             return(

               <div ><h3>{slide.title}</h3></div>
             )
           })}
           
         </div>
    );
} ;
export default SlideView;