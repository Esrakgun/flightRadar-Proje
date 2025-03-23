
import { createSlice } from "@reduxjs/toolkit";
import { getFlight } from "../actions";


const initialState={
    isLoading:true,
    error:null,
    flights:[],
};

const flightSlice=createSlice({
    name:"flight",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
      builder.addCase(getFlight.pending ,(state)=>{
        state.isLoading=true;
      });
      builder.addCase(getFlight.rejected ,(state,action)=>{
        state.isLoading=false;
        state.error=action.error.message;
      });
      builder.addCase(getFlight.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.error=null;
        state.flights=action.payload;
      });
    },
});

export default flightSlice.reducer;