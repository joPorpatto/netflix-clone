import { types } from "../types/types";

export const loadingShow = ()=>{
        return (dispatch)=>{
                dispatch({
                        type: types.loading
                })
        }
}