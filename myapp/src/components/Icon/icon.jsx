import React from "react";
import {PiButterflyFill} from 'react-icons/pi'
import {AiOutlineSearch,AiTwotoneHome} from 'react-icons/ai'
import {LiaToolboxSolid} from 'react-icons/lia'
import {BiSpreadsheet} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import {GrLogout} from 'react-icons/gr'
import {IoIosNotifications} from 'react-icons/io'
import style from './icon.module.css'
function Icon (){
    return(
        <>
        <div className={style.icon}>
            <div className={style.top}>
      <div><PiButterflyFill/></div> 
       <div><AiOutlineSearch/></div>
       </div>
       <div className={style.middle}>
       <div><AiTwotoneHome /></div>
      <div> <LiaToolboxSolid/></div>
       <BiSpreadsheet />
       <BsFillPersonFill/>
       </div>
       <div className={style.bottom}>
        <div><IoIosNotifications/></div>
        <div><GrLogout/></div>
       </div>
       </div>
       </>
    )
}
export default Icon