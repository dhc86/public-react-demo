import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// currently not used, but could be used for async actions related to count
const countSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
      increment: (prevState) => prevState + 1,
      decrement: (prevState) => prevState - 1,
    },
    extraReducers: (builder) => {
      builder
        .addCase(incrementAsync.fulfilled, (state, action) => {
            state.count = action.payload;
        })
    }
});

export const incrementAsync = createAsyncThunk(
	'count/incrementAsync', 
	async (amount) => {
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    return amount;
});

export const { increment, decrement } = countSlice.actions;

const countReducer = countSlice.reducer;
export default countReducer;