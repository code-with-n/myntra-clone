import Bag from "./bag";
import Total from "./total";
import style from "./bag.module.css";
import { useSelector } from "react-redux";
import NoData from "./noData";

const Bag_Total = () => {
  const { arr } = useSelector((store) => store.bag);
  if (arr.length ===0) {
    return <NoData></NoData>;
  } else {
    return (
      <>
        <div className={style.bagTotal}>
          <Bag />
          <Total />
        </div>
      </>
    );
  }
};
export default Bag_Total;
