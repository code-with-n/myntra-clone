
import { useDispatch, useSelector } from "react-redux";
import style from "./wish.module.css"
import { bagAction, wishAction } from "../../store";
const ListItem = ({item})=>{
    const {Bag} = useSelector((store)=>store.wish)
    console.log("Bag: ",Bag)
    const dispatch = useDispatch();
    const MoveCLick = (item)=>{
        dispatch(bagAction.addToBag({items:item}))
        dispatch(wishAction.deleteWish({items:item}))
    }
    
    const DeleteClick=(item)=>{
        dispatch(wishAction.deleteWish({items:item}))

    }
  
  
    return<>
        <div className={style.wishListContainer}>
            <div className={style.imageBox}>
                <img src={item.image } alt="#" />
            </div>
            <div className={style.priceBox}>
                <div className={style.orginalPrice}>Rs {item.orginal_price}</div>
                <div className={style.discountPrice}>Rs {item.current_price}</div>
            </div>
            <hr />
            <div className={style.moveDelete}>
                <div className={style.move} onClick={()=>MoveCLick(item)}>Move</div>
                <div className={style.delete} onClick={()=>DeleteClick(item)}>Delete</div>
            </div>
        </div>
    </>
    
}

export default ListItem;