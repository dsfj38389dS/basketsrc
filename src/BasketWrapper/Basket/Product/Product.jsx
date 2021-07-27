import s from './Product.module.css'
import karasy from './../../img/karasy.jpg'

export const Product = (props) => {
    let sss = 'sds';
    return (<div className={s.Product}>
        <div className={s.ProductInput}>
            <input className={s.CheckboxMein} type="checkbox" id={props.id} name="CheckboxMein-2"/>
            <label htmlFor={props.id}></label>
        </div>
        <div className={s.ProductImg}>
            <img src={karasy}/>
        </div>
        <div className={s.ProductName}>
            <div className={s.ProductNameItem}>
                Карабин с верт. и подш. Owner 5159-071 №7

            </div>
            <div className={s.ProductNameLoca}>
                {/* <div className={s.ProductNameLocaItem}>
                    Есть только в Санкт-Петербурге
                </div>*/}
               {/* <div>
                    <select className={s.SelectCss}>
                        <option className={s.SelectCssOption} >из Москвы </option>
                        <option>из Воронежа</option>
                        <option>из Ярославля</option>
                        <option>из Ростова-на-Дону</option>
                    </select>
                </div>*/}
                <div>
                    <label htmlFor="select" className={s.SelectSelect}>
                        <input className={s.SelectInput} className={s.SelectInputW} type="radio" name="list" value="not_changed" id="bg" checked/>
                        <input className={s.SelectInput} type="radio" name="list" value="not_changed" id="select"/>
                            <label className="bg" htmlFor="bg"></label>
                            <div className={s.SelectItems}>
                                <input className={s.SelectInput} type="radio" name="list" value="first_value" id="list[0]"/>
                                    <label htmlFor="list[0]">First option</label>
                                    <input className={s.SelectInput} type="radio" name="list" value="second_value" id="list[1]"/>
                                        <label htmlFor="list[1]">Second loooooong option</label>
                                        <span className={s.SelectText}>Select something...</span>
                            </div>
                    </label>

                    <a className={s.SelecLink} href="#" onClick="alert(document.querySelector('input[name=list]:checked').value)">Show selected
                        value</a>
                </div>
            </div>

        </div>
        <div className={s.ProductRight}>
            <div className={s.ProductCountPrice}>
                <div className={s.ProductCount}>
                    <div className={s.ProductButton}>
                        <button className={s.ProductButtonMinus}></button>
                        <div className={s.ProductButtonCount}>1</div>
                        <button className={s.ProductButtonPlus}></button>
                    </div>
                    <div className={s.ProductMaxCount}>макс: 4 шт.</div>
                </div>
                <div className={s.ProductPrice}>
                    {/* <div className={s.ProductPriceMein}>70 ₽</div>*/}
                    <div className={s.ProductPriceDiscount}>
                        <div className={s.ProductPriceNew}>4 290 ₽</div>
                        <div className={s.ProductPriceOld}>5 290 ₽</div>
                    </div>
                </div>
            </div>
            <div className={s.ProductArti}>
                Артикул: 62275
            </div>
        </div>
        <div className={s.ProductDelete}>
            <a className={s.ProductDeleteClose}></a>

        </div>
    </div>)

}
export default Product;
