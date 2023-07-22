import React from "react";
import style from './left.module.css'
import { Avatar,Button } from "@mui/material";
function Left (){
    return(
        <div className={style.leftContainer}>
            <div className={style.avatar}>
            <Avatar
             alt="Sourav Ganguly"
             src="https://gumlet.assettype.com/barandbench%2F2021-07%2F3e25a27f-d4e1-4f11-a28f-ebfb9e04c84c%2Fsourav.jpg?auto=format%2Ccompress&fit=max&w=1200"
             sx={{ width: 100, height: 100 }}/>
             <div className={style.text}><strong>Hii Mike,</strong><br/>welcome back</div>
           
             </div>
             <div className={style.rate}>
                <p id={style.p}>Today</p><strong id={style.str}>$1926,8</strong><br/>Account Balance<br/><br/>
                <strong>$4,000</strong><br/>year-to-Date contribution<br/><br/>
                <strong>$1,892</strong><br/> Total Interest<br/><br/>
                <Button variant="contained">I want to </Button><br/><br/>
                <strong>Recent Trancations</strong><br/><br/>2020-08-07<br/><strong>withdrawal Transfer to Bank-xxx11</strong><hr/>
                2020-07-21<br/><strong>withdrawal Transfer to Bank-xxx11</strong><hr/>
                2020-07-21<br/><strong>withdrawal Transfer to Bank-xxx11</strong><hr/>
             </div>
        </div>
    )
}
export default Left