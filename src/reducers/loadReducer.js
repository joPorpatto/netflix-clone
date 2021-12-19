import { types } from "../types/types";

const initialState={
        loading: false
}


export const loadReducer= (state=initialState,action) =>{
        switch (action.type) {

                case types.loading:
                        return {                                
                                loading: true
                        }
                case types.loadingFinish:
                        return {                                
                                loading: false
                        }
                
                default:
                        return state;
        }
}