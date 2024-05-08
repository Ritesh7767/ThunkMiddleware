import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name : 'dataSlice',
    initialState : [],
    reducers : {
        GET_DATA(state, action){
            return action.payload
        }
    }
})

export const {GET_DATA} = dataSlice.actions
export default dataSlice.reducer