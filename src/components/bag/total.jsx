import { useSelector } from "react-redux";
import style from "./bag.module.css"
import Item from "../section/item";
const Total = ()=>{
  const { arr } = useSelector((store) => store.bag);
    console.log("price: ",arr.current_price)
    const len = arr.length;
    let sum = 0;
    let getDiscount = 0;
    arr.map((item)=>(
        sum = Number(item.orginal_price) +sum
        
      
    ))
    arr.map((item)=>(
        getDiscount = Number(item.orginal_price)- Number(item.current_price)
    ))
   
    let Total = sum-getDiscount;

    return<>


        <div className={style.totalBox}>
            <div className={style.priceDetail}>Price Detail</div>
            <div className={style.priceContainer}>
                <div className={style.price}>Price ({len} items)</div>
                <div className={style.totalPrice}>
                    <span> Rs {sum}</span>
                </div>
            </div>
            <div className={style.priceContainer}>
                <div className={style.price}>Discount</div>
                <div className={style.totalPrice}>-{getDiscount}</div>
            </div>
            <div className={style.priceContainer}>
                <div className={style.price}>Delhivery Charge</div>
                <div className={style.totalPrice}> Rs 59</div>
            </div>
            <hr />
            <div className={style.priceContainer}>
                <div className={style.priceTotal}>Total Payable</div>
                <div className={style.totalPrice}> Rs {Total + 59}</div>
            </div>

        </div>

    </>
}

export default Total;