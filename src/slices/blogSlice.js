import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../api/api";
export const getBlog = createAsyncThunk('/getBlog',async(slug)=>{
    
    try {
        const res = await api.get(`/blogs/${slug}`);
        console.log(res);
        console.log('ok');
        return res.data;
      } catch (e) {
        console.error(e.message);
      } 

})
const blogSlice = createSlice({
    name:'blog',
    initialState:{status:'idle',data:{},err:null},
    extraReducers(builder){
        builder.addCase(getBlog.pending,(state)=>{
            state.status='pending'
        }).addCase(getBlog.fulfilled,(state,action)=>{
            state.status='success'
            state.data = action.payload.data
        }).addCase(getBlog.rejected, (state) => {
            state.status.status = 'pending'
        })
    }
    
})
export default blogSlice.reducer 