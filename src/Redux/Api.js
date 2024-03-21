import {  createSlice } from "@reduxjs/toolkit";
import {dataApi} from './fetch'

const initialstate = {
  datas: "",
};

const ApiRedux = createSlice({
  name: "data",
  initialState: initialstate,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder.addCase(dataApi.fulfilled, (state, action) => {
      state.datas = action.payload;
    });
  
  },
});
export const {fetch}=ApiRedux.actions

export default ApiRedux.reducer;

