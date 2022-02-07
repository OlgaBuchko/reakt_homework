import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./carSlise";

const store = configureStore({
    reducer: {
       carReducer
    }
})

export default store