import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'





export const getMarsRoverDetails = createAsyncThunk(
    'nasa/getnasaDetails',
    async(id) => {
      const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=0gy1oqP1DslGJv9aV7euxFtg7yAt81uoBnUPXrae`)
        const data = await response.json()
        return data
    }
  )


const nasaStore = createSlice({
    name: "nasa",
    initialState:{
      nasaDetails: [],
      heartColor: false
      
    },
    reducers:{
      setNasaDetails: (state, action) => {
        state.nasaDetails.push(action.payload)
      },
      setHeartStatus: (state, action) => {
          state.heartColor = action.payload
      }
    },
    extraReducers: (builder) => {
      builder.addCase(getMarsRoverDetails.fulfilled, (state, action) =>{
        state.nasaDetails.push(action.payload)
      })
    },
  
  
  })

  export const {setNasaDetails,setHeartStatus} = nasaStore.actions
  export default nasaStore.reducer