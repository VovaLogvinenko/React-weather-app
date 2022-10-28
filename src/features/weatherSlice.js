import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    weather: [],
    currentWeather: [],
    bool: false,
    progress: 0
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
        setBoolOff: (state) => {
            state.bool = false
            state.progress = 0
        },
        setProgress: (state, action) => {
            state.progress = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.progress = 30
            })
            .addCase(getWeather.fulfilled, (state) => {
                state.progress = 100
            })
            .addCase(getWeather.rejected, (state) => {
                state.progress = 100
                alert('Не вірно введено місто')
            })
    }
})

export const { setWeather, setCurrentWeather, setBoolOff, setProgress } = weatherSlice.actions
export default weatherSlice.reducer