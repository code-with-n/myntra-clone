import Hero from "./components/hero/hero";
import Section from "./components/section/section";
import style from "./container.module.css"
const Container = ()=>{
    return<>
        <div className={style.container}>

         <Hero/>
         <Section/>
        </div>
    </>
}
export default Container;