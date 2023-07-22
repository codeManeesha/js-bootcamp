import React from "react";
import style from './right.module.css'
import { Button, Slider } from "@mui/material";
function Right (){
    return(
        <div className={style.container}>
        <div className={style.main}>
            <h4>Retirement strategy</h4>
            <h5>Employee Contribution</h5>
          <Slider
  size="small"
  defaultValue={70}
  aria-label="Small"
  valueLabelDisplay="auto"
/>
            <h5>Retirement Age</h5>
            <Slider
  size="small"
  defaultValue={70}
  aria-label="Small"
  valueLabelDisplay="auto"
/>
<h4>Employer Contribution</h4>
<h4>Contribution rate</h4>
<div className={style.button}><Button variant="contained">Update </Button></div>
<p>View Help Docs</p>

</div> 

<div className={style.bottom}>

      <h5>Are you considering a <br/><strong>Housing Advance</strong></h5>
      <div className={style.int}>Limited time reduced interest</div>
      <h6>Learn more..</h6>
        </div>
        </div>
    )
}
export default Right