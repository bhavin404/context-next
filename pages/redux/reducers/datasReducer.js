import { FETCH_DATA } from "../actions";

const initialState ={
    datas1:[]
}

export const datasReducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_DATA:
            return {
                ...state,
                datas:action.payload,
            }
        
        default: return state;
    }

}