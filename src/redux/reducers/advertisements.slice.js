import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllAdvertisements } from "../../api/advertisements";

export const fetchAdvertisements = createAsyncThunk("advertisements/fetchall", async () => {
    try {
        const res = await fetchAllAdvertisements()
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

const advertisementsSlice = createSlice({
    name: "properties",
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchAdvertisements.pending]: (state) => {
            state.loading = true
        },
        [fetchAdvertisements.rejected]: (state, action) => {
            state.loading = false
            state.error = "Error while fetching data"
        },
        [fetchAdvertisements.fulfilled]: (state, action) => {
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


export default advertisementsSlice.reducer