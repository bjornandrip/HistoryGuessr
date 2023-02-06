import styles from '@/styles/overview.module.css'
import { useState } from 'react'

const OverviewScore = ({data,score}) =>{
  const [expandImage, setExpandImage] = useState(false)

  return(
    <>
    <div className={styles.overviewScore}>
      <img className={styles.overviewImage} onClick={()=>{setExpandImage(true)}} src={data.url}/>
      <div>Correct year: {data.year} <br /> Score: {score}</div>
    </div>
    {expandImage ? (<div className={styles.overlay}><img className={styles.overlayImg} onClick={()=>setExpandImage(false)} src={data.url} alt="" /></div>):('')}
    </>
  )
}
export default OverviewScore