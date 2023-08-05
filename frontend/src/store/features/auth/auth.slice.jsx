import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user:null,
}

const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            console.log("action",action)
            state.user = action.payload?.user;
        },
        deleteUser:(state,action)=>{
            state.user = action.payload?.user;
        }
    }
})
export const {addUser, deleteUser} = authSlice.actions;
export default authSlice.reducer;
