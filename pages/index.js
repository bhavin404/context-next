import { Toolbar } from '../components/Toolbar'
import styles from '../styles/Home.module.css'
import DatasProvider from './context/datasProvider'

export default function Home() {
  return (
  
      <div className={styles.mainContainer}>
        <Toolbar />
        <div className={styles.container}>
          <h1>Get <span>Covid19 </span>  status</h1>
          <div className={styles.line}></div>
          <h3>click on the covid19 and get all the latest updates </h3>
        </div>
      </div>
  )
}
