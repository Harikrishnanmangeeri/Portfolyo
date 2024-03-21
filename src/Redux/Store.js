import { configureStore } from "@reduxjs/toolkit";
import Api from "./Api";

export const store= configureStore({
    reducer:{
        api:Api,
    }
})