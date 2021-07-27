import React from "react";
import s from './Delivery.module.css'



const  Delivery = (props) => {
    return (
        <div className={s.MeinInfo}>
            <div className={s.Delivery}>
                <div className={s.DeliveryType}>
                    Тип доставки
                </div>
                <div className={s.DeliveryMedia}>
                    <div className={s.DeliveryTypeData}>
                        <div className={s.DeliveryTypeItem}>
                            <input className={s.DeliveryRadio} name="color" value="Курьером" id="input-1" type="radio"/>
                            <label htmlFor="input-1">Курьером</label>

                        </div>
                        <div className={s.DeliveryTypeItem}>
                            <input className={s.DeliveryRadio} name="color" value="Пункт выдачи" id="input-2" type="radio"/>
                            <label htmlFor="input-2">Пункт выдачи</label>
                        </div>
                        <div className={s.DeliveryTypeItem}>
                            <input className={s.DeliveryRadio} name="color" value="Постамат" id="input-3" type="radio"/>
                            <label htmlFor="input-3">Постамат</label>
                        </div>
                    </div>
                    <div className={s.DeliveryAddress}>
                        <div className={s.DeliveryAddressTitle}>
                            Адрес доставки
                        </div>
                        <div className={s.DeliveryAddressLoca}>
                            г. Москва, ул. Генерала Белобородова, д. 46 кв. 67
                        </div>
                        <div className={s.DeliveryAddressButton}>
                            <button className={s.DeliveryAddressButtonItem}>Изменить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Delivery;