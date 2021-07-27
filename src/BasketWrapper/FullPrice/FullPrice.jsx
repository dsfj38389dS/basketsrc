
import s from './FullPrice.module.css';
import React, {  useState } from 'react';


const FullPrice = (props) => {
    let [editMod, setEditMod] = useState(false);
    const activEditMod = () => {
        setEditMod(true)
    }






    return (
        <div  className={s.FullPriceСontainer}>
            <div className={s.FullPrice}>
                <div className={s.FullPriceWrapper}>
                    <div className={s.FullPriceCount}>
                        <div className={s.FullPriceTitle}>Всего</div>
                        <div className={s.FullPriceTotalCount}>
                            <div className={s.FullPriceTotalCountItem}>
                                Товары, 12 шт.
                            </div>
                            <div className={s.FullPriceItem}>
                                20 789 ₽
                            </div>
                        </div>
                    </div>

                    <div className={s.FullPriceDeliveryData}>
                        <div className={s.FullPriceDeliveryTitle}>Доставка:</div>
                        <div className={s.FullPriceFlex}>
                            <div className={s.FullPriceCity}>
                                из Санкт-Петербурга
                            </div>
                            <div className={s.FullPriceItem}>
                                350 ₽
                            </div>
                        </div>
                        <div className={s.FullPriceFlex}>
                            <div className={s.FullPriceCity}>
                                из Волгограда
                            </div>
                            <div className={s.FullPriceItem}>
                                150 ₽
                            </div>
                        </div>
                        <div className={s.FullPriceFlex}>
                            <div className={s.FullPriceCity}>
                                из Москвы
                            </div>
                            <div className={s.FullPriceItem}>
                                0 ₽
                            </div>
                        </div>
                        <div className={s.FullPriceSum}>
                            <div className={s.FullPriceFlex}>
                                <div className={s.FullPriceCity}>
                                    Сумма доставки
                                </div>
                                <div className={s.FullPriceItem}>
                                    500 ₽
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={s.FullPriceDiscount}>
                        <div className={s.FullPriceFlex}>
                            <div className={s.FullPriceCity}>
                                Скидка
                            </div>
                            <div className={s.FullPriceDiscountItem}>
                                834 ₽
                            </div>
                        </div>
                    </div>
                    <div className={s.FullPriceTotal}>
                        <div className={s.FullPriceFlex}>
                            <div className={s.FullPriceTotalItem}>
                                Итого
                            </div>
                            <div className={s.FullPriceTotalMein}>
                                21 389 ₽
                            </div>
                        </div>
                        <div>
                            <button className={s.FullPriceButton} >
                                Оформить покупку
                            </button>
                        </div>
                        <div className={s.PromoСode}>
                            {editMod
                                ?
                                <div >
                                     <div className={s.PromoСodeForm}>
                                    <input  className={s.PromoСodeFormInput} autoFocus={true} placeholder="Введите промокод"/>
                                    <button  className={s.PromoСodeFormButton} type="submit">ОК</button>
                                    <div className={s.PromoСodeFormError} >
                                        Ошибка! Промокод уже недействителен. Введите другой
                                    </div>
                                </div>
                                    <div>
                                        <input  className={s.PromoСodeFormInput}  placeholder="Промокод: F3FRL75R43"/>
                                        <a className={s.PromoСodeFormLink} ></a>
                                        <div className={s.PromoСodeFormOk} >
                                            Код применен. Скидка не распространяется на акционные товары
                                        </div>
                                    </div>
                                </div>
                                : <a onClick={() => activEditMod()}  className={s.PromoСodeItem}>Ввести промокод</a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default FullPrice;