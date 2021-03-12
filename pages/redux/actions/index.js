export const FETCH_DATA = 'FETCH_DATA'

export const fetchData = (datas) =>{
   return{
    type: FETCH_DATA,
    payload: datas,
   } 
}

