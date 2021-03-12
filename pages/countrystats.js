import React,{useEffect,useContext} from 'react'
import styles from '../styles/Country.module.css'
import { Toolbar } from '../components/Toolbar'
import {connect} from 'react-redux';
import DatasProvider, {DatasContext} from './context/DatasProvider'


const countrystats = ({datas}) => {
    console.log(datas);
    const datasContext = useContext(DatasContext)
  
    useEffect(() => {
    datasContext.fetchdata(datas)    
    }, [])

    return (
        <>
          
            <Toolbar />
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Status of Provinces </h1>
                </div>  
                <div className={styles.status}>
                    {datas.data.covid19Stats.map((array,index) => 
                    <div key={index} className={styles.box}>
                    <h3 className={styles.death}>
                        {/* {country.country} */}
                        {array.province}
                </h3>
                    <div className={styles.loads}>
                        <div className={styles.load}>
                            <p>  <span> Death</span> <br/> {array.deaths}</p>
                        </div> <div className={styles.load}>
                            <p> <span className={styles.recovered}> Recovered</span> <br/> {array.recovered}</p>
                        </div>

                    </div>
                </div>

                    )}
                    



                </div>
            </div>
           
        </>
       
    )
}

export const getServerSideProps = async pageContext => {

    const apiReference = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=India", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "af7e023a5dmsha09acea0c73bbc1p1df7a8jsnf8daf2ee107f",
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
        }
    })

    const datas = await apiReference.json()

    return {
        props: {
            datas: datas
        }
    }
}

// const mapStatetoProps = ()=>{
//     return{
//         info : state.datas.datas1
//     }
// }

// export default connect(mapStatetoProps)(countrystats)

export default countrystats