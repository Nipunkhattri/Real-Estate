import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProperties } from "../../api/properties";

export const fetchProperties = createAsyncThunk("properties/fetchall", async () => {
    try {
        const res = await fetchAllProperties()
        console.log(res.properties);
        return { data: res }
    }
    catch (err) {
        return { error: "Error while fetching data" }
    }
})


const initialState = {
    data: {},
    loading: false,
    error: ""
}

const propertiesSlice = createSlice({
    name: "properties",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchProperties.pending]: (state) => {
            state.loading = true
        },
        [fetchProperties.rejected]: (state, action) => {
            state.loading = false
            state.error = "Error while fetching data"
        },
        [fetchProperties.fulfilled]: (state, action) => {
            state.loading = false
            if (action.payload.data) {
                state.data = action.payload.data
            }
            else if (action.payload.error) {
                state.error = action.payload.error
            }
        },
    }
})


export default propertiesSlice.reducer