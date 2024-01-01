import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const getLanguages = createAsyncThunk('/getAllLanguage',async()=>{
    
    try {
        const res = await api.get(`/getAllLanguages`);
        return res.data;
      } catch (e) {
        console.error(e.message);
      } 

})
const langSlice = createSlice({
    name:'language',
    initialState:{status:'idle',data:[],err:null},
    extraReducers(builder){
        builder.addCase(getLanguages.pending,(state)=>{
            state.status='pending'
        }).addCase(getLanguages.fulfilled,(state,action)=>{
            state.status='success'
            state.data = action.payload.data
        }).addCase(getLanguages.rejected, (state) => {
            state.status.status = 'pending'
        })
    }
    
})
export default langSlice.reducer 