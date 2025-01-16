import { useRef, useState } from "react";
import style from "./head.module.css";
import Home from "./homeCompo";

const NavBar = () => {
  const [hoverButton, setHoverButton] = useState(null);
  // const hoverButton = useRef(false);
  const buttons = [
    { label: "Men", className: "button" },
    { label: "Women", className: "button" },
    { label: "Kids", className: "button" },
    { label: "Home & Living", className: "buttonliv" },
    { label: "Beauty", className: "button" },
    { label: "Studio", className: "buttonStudio", extra: "New" },
  ];
  const onHandleClick = (buttonName,event) => {
    event.preventDefault()
    // console.log(buttonName);
    // hoverButton.current = true;
    setHoverButton(true)
    
    if (hoverButton===true) {
      // console.log(hoverButton.current)
      // console.log("true")

    }else{

    }
  };
  const onMouseLeave =(e)=>{
    e.preventDefault();
    // hoverButton.current = false;
    setHoverButton(false)
    if (hoverButton ===false) {
     
    }
  }
  return (
    <>

      <div className={style.navBar}>
     

      {buttons.map((button, index) => (
        <a
          href=""
          key={index}
          className={style[button.className]}
          onMouseEnter={(event) => onHandleClick(button.label,event,setHoverButton(true))}
          onMouseLeave={(event)=>onMouseLeave(event,setHoverButton(false))}
          // onMouseEnter={()=> ref}
        >
          {button.label}
          {button.extra && <sup>New</sup>}
        </a>

      ))}


      </div>

      
    </>
  );
};

export default NavBar;


 {/* <a href="#"  className={style.button}>Men</a>
        <a href="#" className={style.button}>Women</a>
        <a href="#" className={style.button}>Kids</a>
        <a href="#" className={style.buttonliv}>Home & Living</a>
        <a href="#" className={style.button}>Beauty</a>
     
        <a href="#" className={style.buttonStudio}>Studio <sup>New</sup></a> */}