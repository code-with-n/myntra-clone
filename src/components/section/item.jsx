import { useEffect, useRef, useState } from "react";
import section from "./section.module.css";
import { useDispatch, useSelector } from "react-redux";
import { bagAction, wishAction } from "../../store";
import { CiHeart } from "react-icons/ci";

const Item = ({ item }) => {
 
  const {arr} = useSelector  (data=>data.bag)
 

  
  const elementFound = arr.some((ar)=> ar.id === item.id)
 
  console.log(elementFound)
  
  const [getWishClicked, setWishClicked] = useState(false);
  const {Bag} = useSelector(store =>store.wish)
  const wishFound  = Bag.some((ar)=>ar.id === item.id)
 

  let totalPart = Number(item.orginal_price);
  let part = Number(item.current_price);
  // let percentage = ((part / totalPart) * 100).toFixed(2);
  let percentage= (((totalPart - part) / totalPart) * 100).toFixed(2);

  // const itemFile = useSelector();

  const dispatch = useDispatch();
  const onClick = (price) => {
    
    dispatch(bagAction.addToBag({ items: price }));
    // setClicked((price)=>!price.check);
    setClicked(true)
    console.log(item)
    console.log(item.click)
    // price.click true;

    
  };

  const wishClicked = (getItem) => {
    dispatch(wishAction.addToWish({ items: getItem }));
    setWishClicked((getItem) => !getItem.wishClick);
  };
  return (
    <>
      <div className={section.itemBox}>
        <div className={section.itemImage}>
          <img src={item.image} alt="" srcset="" />
          {/* <CiHeart className={section.wishlist}/> */}
        </div>
        
        <div className={section.purchaseRating}>
          <div className={section.rating}>{item.rating.stars}|</div>
          <div className={section.purchase}>{item.rating.count}</div>
        </div>
        <div className={section.brandName}>
          <div className={section.companyName}>{item.compny_name}</div>
          <div className={section.itemName}>{item.item_name}</div>
        </div>
        <div className={section.priceOff}>
          <div className={section.newPrice}>Rs {item.current_price} </div>
          <div className={section.oldPrice}>Rs {item.orginal_price}</div>
          <div className={section.off}> {percentage} %</div>
        </div>
        <div className={section.addWish}>
          <div
            className={`${section.addToCart} ${
              elementFound ? section.background : ""
            }`}
            onClick={()=>onClick(item)}
          >
            {elementFound ? "Added" : "Add To Cart"}
          </div>

          <div className={`${section.addwishButton} ${wishFound ? section.wishback :""} `} onClick={()=>wishClicked(item)}>
          <CiHeart className={`${section.CiHeart} ${wishFound ? section.heartBack :""}`}></CiHeart>
        </div>
        </div>
        {/* <AddCart 
        onClick={() => onClick(item)}
         getClicked={getClicked}
        wishClicked={()=>wishClicked(item)} 
        getWishClicked = {getWishClicked}
          /> */}
      </div>
    </>
  );
};

export const AddCart = ({
  onClick,
  getClicked,
  wishClicked,
  getWishClicked,
}) => {
  return (
    <>
      {/* <div className={section.addToCart} onClick={onClick}>{getClicked?"Added": "Add To Cart"}</div> */}
      <div className={section.addWish}>
        <div
          className={`${section.addToCart} ${
            getClicked ? section.background : ""
          }`}
          onClick={onClick}
        >
          {getClicked ? "Added" : "Add To Cart"}
        </div>

        {/* <div className={section.addwishButton} onClick={wishClicked}>
          <CiHeart className={section.CiHeart}></CiHeart>
        </div> */}
        <div
          className={`${section.addwishButton} ${
            getWishClicked ? section.wishback : ""
          } `}
          onClick={wishClicked}
        >
          <CiHeart
            className={`${section.CiHeart} ${
              getWishClicked ? section.heartBack : ""
            }`}
          ></CiHeart>
        </div>
      </div>
    </>
  );
};

export const Buy = () => {
  return (
    <>
      <div className={section.addToCart}>Added In Cart</div>
    </>
  );
};
export default Item;
