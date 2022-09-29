import { types } from '../types/Types';

const initialState = {
    dataApi: [],
    nombre: "",
    email: "",
    ciudad: "",
    compañia:""
}
export const apiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.DATA_API: 
            return {
                ...state,
                dataApi: action.payload,
            } 
      
        default:
            return state
    }
}