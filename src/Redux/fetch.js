import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const dataApi = createAsyncThunk("get/data", async () => {
    const res = await axios.get(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    return res.data;
  });
  
  