import { createSlice } from "@reduxjs/toolkit";

const defaultAccountValues = {
    balance: 0,
    isLocked: false,
    isAuthenticated: false,
    pin: '0000',
  };

const bankSlice = createSlice({
      name: "bank",
      initialState: defaultAccountValues,
      reducers: {
        deposit: (prevState, action) => {
          if (action.payload) {
            return {...prevState, balance: prevState.balance + +action.payload};
          }
        },
        withdrawal: (prevState, action) => {
          if (action.payload) {
            return {...prevState, balance: prevState.balance - +action.payload};
          }
        },
        toggleLocker: (prevState) => {
            return {...prevState, isLocked: !prevState.isLocked};
        },
        toggleAuthentication: (prevState) => {
            return {...prevState, isAuthenticated: !prevState.isAuthenticated};
        },
        pinUpdate: (prevState, action) => {
            return { ...prevState, pin: action.payload };
        },
      }
});

export const { deposit, withdrawal, toggleLocker, toggleAuthentication, pinUpdate } = bankSlice.actions;

const bankReducer = bankSlice.reducer
export default bankReducer;