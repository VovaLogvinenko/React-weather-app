import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    weather: [],
    currentWeather: [],
    bool: false,
}

// process.env.REACT_APP_API_KEY
export const getWeather = createAsyncThunk(
    'weather/getWeather',
    async (city, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    const otherRes = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    dispatch(setWeather(res.data))
    dispatch(setCurrentWeather(otherRes.data))
})


export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeather: (state, action) => {
            state.bool = true
            state.weather = action.payload
        },
        setCurrentWeather: (state, action) => {
            state.currentWeather = action.payload
        },
        setBoolOff: (state, action) => {
            state.bool = false
        }
    },
    extraReducers: {
        [getWeather.fulfilled]: () => console.log('fulfilled'),
        [getWeather.pending]: () => console.log('pending'),
        [getWeather.rejected]: () => alert('Не вірно введена пошта!')
    }
})

export const { setWeather, setCurrentWeather, setBoolOff } = weatherSlice.actions
export default weatherSlice.reducer