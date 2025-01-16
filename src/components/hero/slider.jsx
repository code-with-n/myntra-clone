import '/Users/ns1ns/ReactProject/Myntra/myntra/src/index.css'
import style from "./hero.module.css"
// import style from "./hero.module.css"
const Slider = ()=>{
    return<>
        <div className={style.slideBox}>
            <div className="imageBox">1</div>
            <div className="imageBox">2</div>
            <div className="imageBox">3</div>
            {/* <div className="imageBox"><img src="./myntra.png" alt="" /></div> */}

        </div>
    </>
}

export default Slider;