import { useDispatch, useSelector } from "react-redux";
import style from "./sideBag.module.css";
import { bagAction } from "../../store";
const SideBag = ({ item }) => {
    const dispatch = useDispatch();


    const {arr}  = useSelector((store)=>store.bag)
    let totalPrice = Number(item.orginal_price);
    let partPrice = Number(item.current_price);
  

    let percentage = ((partPrice/totalPrice)*100).toFixed(2);
    const onClick = (id)=>{
        // console.log("id is:",id)
        dispatch(bagAction.deletItem({items:id}))
    }
  return (
    <>
      <div className={style.container}>
        <div className={style.imageBox}>
          <img src={item.image} alt="#" />
        </div>
        <div className={style.itemFull}>
          <div className={style.itemName}>{item.item_name}</div>
          <div className={style.seller}>Seller : Nitesh</div>
          <div className={style.price}>
            <div className={style.orginalPrice}>Rs {item.orginal_price}</div>
            <div className={style.newPrice}>Rs {item.current_price}</div>
            <div className={style.off}>{percentage}%</div>
          </div>
          <div className={style.remove} onClick={()=>onClick(item)}>
            Remove
        </div>
        </div>
        <div className={style.aboutItem}>
            <span>About {item.comapny_name}</span>
          <p>
            Lorem ipsum elit.thhf yy
          </p>
        </div>
       
      </div>
    </>
  );
};

export default SideBag;