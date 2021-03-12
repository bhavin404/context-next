import React,{useState,useEffect} from 'react'
import { Toolbar } from '../components/Toolbar'
import styles from '../styles/Covid.module.css'
import {connect} from 'react-redux'

const Covid19 = ({datas}) => {
    console.log(datas);
    const [text, setText] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault();
        setText(e.target.inpt.value)
        console.log(text);
    }

    
    return (
        <>
        <Toolbar/>
        <div className={styles.container}>   
    
                <div className={styles.header}>
                    <h1>Live <span>Covid19</span> Status</h1>
                </div>
                {/* <div className={styles.input}>
                    <form onSubmit={(e)=> onSubmit(e)}>
                    <input 
                    type="text" 
                    name="inpt" 
                    id=""
                    placeholder="Enter country Name"
                    value={text}
                    onChange={(e) =>setText(e.target.value)}
                    />
                    </form>
                </div> */}
                <div className={styles.location}>
                    <h1>{datas.data.location}</h1>
                </div>

                <div className={styles.status}>

                <div className={styles.box}>
                        <h1 className={styles.death}>
                            Death
                        </h1>
                        <h3> {datas.data.deaths}</h3>
                </div>
               
                <div className={styles.box}>
                <h1 className={styles.confirmed}>
                            Confirmed
                        </h1>
                        <h3> {datas.data.confirmed}</h3>
                </div>
                <div className={styles.box}>
                <h1 className={styles.recovered}>
                            Recovered
                        </h1>
                        <h3> {datas.data.recovered}</h3>
                </div>
                
                </div>

        </div>
        </>
    )
}



export const getServerSideProps = async pageContext =>{

    const apiReference = await fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=India`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "af7e023a5dmsha09acea0c73bbc1p1df7a8jsnf8daf2ee107f",
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
        }
    })

    const datas = await apiReference.json()

    return {
       props:{
           datas: datas
       }
    }

    const mapStatetoProps =(state) =>{
        return {
            data : state.datas.deaths
        }
    }


 }

export default Covid19
