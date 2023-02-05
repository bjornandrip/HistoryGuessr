import styles from '@/styles/overview.module.css'

const OverviewScore = ({data,score}) =>{

  return(
    <>
    <div className={styles.overviewScore}>
      <img className={styles.overviewImage} src={data.url}/>
      <div>Correct year: {data.year} <br /> Score: {score}</div>
    </div>
    </>
  )
}
export default OverviewScore