import React ,{useState} from "react";
import s from './Basket.module.css'
import Product from "./Product/Product";
import image1 from './../img/image38.png'
import ModalAddress from "../../ModalAddress/ModalAddress";



const  Basket = (props) => {
    let messagesElenents =props.messagq.map(m => <Product id={props.id}/>)
    const [ModalActive, setModalActive] = useState(false);
    return (
        <div className={s.Basket}>
            <div>
                <button onClick={ModalActive ? () => setModalActive(false)   : () => setModalActive(true)} >BUTTON</button>
            </div>
            <ModalAddress active={ModalActive}   setActive={setModalActive} >22222222222s </ModalAddress>


            <div className={s.BasketProduct}>
                <div className={s.BasketDelivery}>
                    <div className={s.BasketDeliveryCity}>{props.siti}</div>
                    <div className={s.BasketDeliveryInfo}>
                        <span className={s.BasketDeliveryDate} >Поступление 27-29 июля за 350 ₽</span>
                       <div className={s.BasketDeliveryLogo}> <img  src={image1}/></div>
                    </div>
                </div>
                <div className={s.ProductСontainer}>
                    {messagesElenents}
                </div>
            </div>

        </div>
    )
}
export default Basket;