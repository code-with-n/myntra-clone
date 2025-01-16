// import Head from "../header/head/head";
// import Item from "../section/item";
// import { itmes } from "../../../../data";
import { useSelector } from "react-redux";
// import Hero from "../hero/hero";
// import section from "../section/section.module.css";
import style from "./bag.module.css"
// import BagItem from "./bagItem";
// import Total from "./total";
import SideBag from "./sidebag";

const Bag = () => {
 
  const { arr } = useSelector((store) => store.bag);
  

    return (
      <>
        <div className={style.container}>
          {arr?.map((item) => (
            <SideBag item={item} key={item.id}></SideBag>
          ))}
          
        </div>
      </>
    );
  
};

export default Bag;
