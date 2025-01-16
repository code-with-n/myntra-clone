import { IoIosSearch } from "react-icons/io";
import style from "./head.module.css"
const Query = ()=>{
    return<>
        
        <div className={style.query}>
          <div className={style.searchBox}>
            <div className={style.searchIcon}><IoIosSearch className={style.searchPNG} /></div>
            <input type="text" placeholder="seach item.." />
          </div>
        </div>

    </>
}
export default Query;