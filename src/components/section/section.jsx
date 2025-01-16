import Item from "./item";
import section from "./section.module.css"
let arr= [1,2,3,4,]
// import { data } from '../../data'; 
import { itmes } from "../../../data";
import { useState } from "react";



// import Item from "./item";

const Section = ()=>{
   
    // console.log(clicked)
    return<>
        <div className={section.secContainer}>
            {itmes.map((item,index)=>(
                <Item key={index} item={item}  />
            ))}
           {/* <Item/>
           <Item/> */}
        </div>
    </>
}

export default Section;