import React from "react";
import s from './BasketWrapper.module.css'
import Basket from "./Basket/Basket";
import Delivery from "./Delivery/Delivery";
import FullPrice from "./FullPrice/FullPrice";


const  BasketWrapper = (props) => {
    let Piter = "из Санкт-Петербурга";
    let Volg = "из Волгограда"
    let messagq = [4,333333]
    let messag = [3]

    return (
        <div className={s.BasketWrapper}>
            <div className={s.BasketWrapperItem}>
                <div className={s.BasketWrapperPath}>
                    Главная  /  Корзина
                </div>
                <div className={s.BasketWrapperName}>
                    Корзина
                </div>
                <div className={s.BasketWrapperInput}>
                    <input className={s.CheckboxMein} type="checkbox" id="CheckboxMein-1" name="CheckboxMein-1"/>
                    <label htmlFor="CheckboxMein-1">Выбрать всё</label>
                </div>
            </div>
            <div className={s.BasketСontent} >
                <div className={s.BasketСontentData}>
                    <Basket siti={Piter} messagq={messagq} id={messagq}/>
                    <Basket siti={Volg} messagq={messag} id={messag}/>
                </div>
                    <Delivery />
                    <FullPrice />
            </div>
        </div>
    )
}
export default BasketWrapper;