import { fetchNoToken} from '../helpers/fetch';
import { types } from './../types/Types'; 

//Se hace la petición de las plantillas disponibles
export const PeticionApi = () => {
    return async (dispatch) => {
        const endpoint = `users`
        const resp = await fetchNoToken(endpoint, 'GET');
        const body = await resp.json(); 
        console.log(body); 
        try {
            dispatch({ type: types.DATA_API, payload: body })
        } catch (e) {
        }
    }
}