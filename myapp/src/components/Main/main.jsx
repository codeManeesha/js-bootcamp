import React from 'react'
import style from './main.module.css'
import BarChart from './chart'
function Main (){
    return(
        <div className={style.container}>
            <div className={style.main}>
           <i>Retirement Income </i><br/>
            <strong>Starting Year 2056</strong><br/><br/>
            </div>
            <div className={style.info}>
                <div><strong>$300,000</strong><br/><i>My goal</i><hr/></div>
                <div><strong>59%</strong><br/><i>Goal achived</i><hr/></div>
                <div><strong>$300</strong><br/><i>Est. Monthly Income</i><hr/></div>

            </div>
            <div className={style.contri}>
                <h4>contributions overtime</h4>
              
            </div>
       <BarChart/>
       <div>
                <h4>How do I compare with my peers?</h4>
                <div className={style.data}>
                    <div><strong>Age:</strong>under 30<hr/><br/>
                    <strong>salary:</strong>k-20-k 30<hr/><br/>
                    <strong>Gender:</strong>Male<hr/><br/>
                    
                    </div>
                    <div className={style.media}>
                <div className={style.widgets}>
            <div className={style.value}>85%</div>
   
            
        </div>
  
        <div className={style.widgets} >
            <div className={style.value} >50%</div>
           
        </div>
        <div className={style.widgets} >
            <div className={style.value} >90%</div>
           
        </div>
        </div>
        </div>
               </div>
        </div>
    )
}
export default Main
 