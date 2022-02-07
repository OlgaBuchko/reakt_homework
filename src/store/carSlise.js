import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../servises";

const initialState = {
    cars: [],
    status: null,
    error: null
};

export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll();

        } catch (e) {
            rejectWithValue(e.message)
        }

    }
)

export const deleteCar = createAsyncThunk(
    'cars/deleteCar',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            dispatch(delCar({id}))
        } catch (e) {
            rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'cars/createCar',

)

const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        delCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        addCar:(state,action)=>{
            state.cars=state.cars.push(action.payload.data)
        },

    },
    extraReducers: {
        [getAllCars.pending]:
            (state) => {
                state.status = "pending"
                state.error = null
            },
        [getAllCars.fulfilled]:
            (state, action) => {
                state.cars = action.payload
            },
        [getAllCars.rejected]:
            (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            }
    }
})
const delCar = carSlice.actions;
const carReducer = carSlice.reducer;
export default carReducer;

export const carActions = {
    deleteCar
}
