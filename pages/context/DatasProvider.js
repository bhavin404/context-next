import React, { createContext,useReducer } from 'react'
import { FETCH_DATA } from './DatasConstants'

export const DatasContext = createContext()
const datasReducer =(state,action) =>{
    switch(action.type){

        case FETCH_DATA:
            return{
                datas:[action.payload]
            }

        default: return state
    }
}

const DatasProvider = (props) => {
   const initialState = {
       datas:[]
   }
   const [state, dispatch] = useReducer(datasReducer, initialState)

   //actions
  const fetchdata = (data) =>{
       dispatch({
           type:FETCH_DATA,
           payload:data
       })
   }

   return(
        <DatasContext.Provider
        value= {{
            datas:state.datas,
            fetchdata:fetchdata
        }}>
            {props.children}
         </DatasContext.Provider>

   )
}

export default DatasProvider
