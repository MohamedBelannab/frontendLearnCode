import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";

export const getQuiz = createAsyncThunk('/getQuiz',async(id)=>{
    
    try {
        const res = await api.get(`/getQuiz/${id}`);
        return res.data;
      } catch (e) {
        console.error(e.message);
    } 

})
const langSlice = createSlice({
    name:'quiz',
    initialState:{status:'idle',data:[],err:null},
    extraReducers(builder){
        builder.addCase(getQuiz.pending,(state)=>{
            state.status='pending'
        }).addCase(getQuiz.fulfilled,(state,action)=>{
            state.status='success'
            state.data = action.payload.data
        }).addCase(getQuiz.rejected, (state) => {
            state.status.status = 'pending'
        })
    }
    
})
export default langSlice.reducer 