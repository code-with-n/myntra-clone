import style from "./hero.module.css";
import Slider from "./slider";
import SliderNum from "./sliderNum";
const Hero = ()=>{
    return<>
      <div className={style.heroContainer}>
        {/* <Slider/>
        <SliderNum/> */}
        <img src="./myntraHero.jpg" alt="" />
      </div>
    </>
}

export default Hero;