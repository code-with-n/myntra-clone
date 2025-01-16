import { Link } from "react-router-dom";
import style from "./head.module.css"
const LogoBox = ()=>{
    return<>
         <div className={style.logoContainer}>
         <Link to="/">
         
          <div className={style.logoBox}><img src="./myntra.png" alt="" /></div>
         </Link>
       </div>
            {/* <img src="./myntra.png" alt=""  className={style.LogoBox}/> */}
    </>
}

export default LogoBox;