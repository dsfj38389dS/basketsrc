import React from "react";
import s from './ModalAddress.module.css'


const  ModalAddress = ({active,setActive}) => {
debugger

    return (
        <div className={active ? s.ModalActive : s.Modal} onClick={() => {console.log('sdsdsd')}} >
            <div  className={active ? s.ModalContentActive : s.ModalContent}  onClick={e => e.stopPropagation()}>
                qweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                <button onClick={() => setActive(false)} > gggg</button>
                <form>
                    <input/>
                    <button type='submit'>222dadsasd</button>
                </form>
            </div>
        </div>
    )
}
export default ModalAddress;