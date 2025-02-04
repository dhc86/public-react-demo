import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const countSlice = createSlice({
    name: 'count',
    initialState: 0,
    reducers: {
      increment: (prevState) => prevState + 1,
      decrement: (prevState) => prevState - 1,
    },
    extraReducers: (builder) => {
      builder
          .addCase(incrementAsync, (state, action) => {
              state.count = action.payload;
          })
    }
});

export const incrementAsync = createAsyncThunk('count/incrementAsync', async () => {
    const response = await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    console.log(response);
    return 1;
});

export const { increment, decrement } = countSlice.actions;

const countReducer = countSlice.reducer;
export default countReducer;