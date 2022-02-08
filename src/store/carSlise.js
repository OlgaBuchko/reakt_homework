import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../servises";

const initialState = {
    cars: [],
};

export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async () => {
        return await carService.getAll();
    })

export const deleteCar = createAsyncThunk(
    'cars/deleteCar',
    async ({id}, {dispatch}) => {

        await carService.deleteById(id);
        dispatch(delCar({id}))
    })

export const createCar = createAsyncThunk(
    'cars/createCar',
    async ({data}, {dispatch}) => {
        await carService.createCar(data);
        dispatch(addCar({data}))
    })

const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        delCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        }
    },

    extraReducers: {
        [getAllCars.fulfilled]:
            (state, action) => {
                state.status = 'fulfilled'
                state.cars = action.payload
            }
    }
})
export const addCar = carSlice.actions;
export const delCar = carSlice.actions;

const carReducer = carSlice.reducer;
export default carReducer;

export const carActions = {
    deleteCar,
    createCar,
}

