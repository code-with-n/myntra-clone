import Action from "./action";
import Hamburger from "./responsiveCompo/hamBurger";
import style from "./head.module.css";
import LogoBox from "./logoContainer";
import NavBar from "./navBar";
import Query from "./query";
import SearchRes from "./responsiveCompo/searchRes";
const Head = () => {
  return (
    <>
      <div className={style.navBox}>
        <Hamburger/>
        <LogoBox/>
        <SearchRes/>
        <NavBar/>
        
        <Query/>
        <Action/>
      </div>
    </>
  );
};

export default Head;
