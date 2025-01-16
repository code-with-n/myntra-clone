import style from "../head.module.css";
import { CgMenuLeftAlt } from "react-icons/cg";
const Hamburger=()=>{
    return<>
        <div className={style.hamburger}>
          <CgMenuLeftAlt className={style.humIcon}/> 
        </div>
    </>
}

export default Hamburger;