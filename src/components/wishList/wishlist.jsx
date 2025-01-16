import { useSelector } from "react-redux";
import ListItem from "./listItem";
import style from "./wish.module.css";
import NoData from "../bag/noData";

const Wishlist = () => {
  const { Bag } = useSelector((store) => store.wish);

  if (Bag.length === 0) {
    return (
      <>
      <NoData/>
      
      </>
    );
  } else {
    return (
      <>
        <div className={style.wish}>
          {Bag?.map((list) => (
            <ListItem item={list} key={list.id} />
          ))}
        </div>
      </>
    );
  }
};
export default Wishlist;
