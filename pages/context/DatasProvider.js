import React, { createContext,useReducer } from 'react'
import countrystats from '../countrystats'
import { FETCH_DATA,FETCH_COUNTRY } from './DatasConstants'

export const DatasContext = createContext()
const datasReducer =(state,action) =>{
    switch(action.type){

        case FETCH_DATA:
            return{
                datas:action.payload
            }

        case FETCH_COUNTRY:
            return{
                country: action.payload
            }
        default: return state
    }
}

const DatasProvider = (props) => {
   const initialState = {
       datas:{},
       country:{}
   }
   const [state, dispatch] = useReducer(datasReducer, initialState)

   //actions
  const fetchdata = (datas) =>{
       dispatch({
           type:FETCH_DATA,
           payload:datas
       })
   }

   const fetchcountry = (datas) =>{
       dispatch ({
           type:FETCH_COUNTRY,
           payload:datas
       })
   }

   return(
        <DatasContext.Provider
        value= {{
            datas:state.datas,
            country:state.country,
            fetchdata:fetchdata,
            fetchcountry
        }}>
            {props.children}
         </DatasContext.Provider>

   )
}

export default DatasProvider
