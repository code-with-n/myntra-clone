import style from "./head.module.css";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Action = () => {
  const { arr } = useSelector((store) => store.bag);
  const count = arr.length;
  
  console.log(arr.length);
  return (
    <>
      <div className={style.action}>
        <Link to="profile">
          <div className={style.profile}>
            <div className={style.profileIcon}>
              <CgProfile className={style.prIcon} />
            </div>
            <a href="" className={style.a}>
              Profile
            </a>
          </div>
        </Link>
        <Link to="wishlist">
          <div className={style.wishlist}>
            <div className={style.wishlistIcon}>
              <CiHeart className={style.hrIcon} />
            </div>
            <a href="" className={style.a}>
              Wishlist
            </a>
          </div>
        </Link>
        <Link to="/bag">
          <div className={style.bag}>
            <div className={style.bagIcon}>
              <IoBagHandleOutline className={style.hrIcon} />
            </div>
            <a className={style.a}>
              Bag <sup className={style.sup}>{count}</sup>
            </a>
            <a className={style.res}>
              <sup className={style.sup}>{count}</sup>
            </a>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Action;
