import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		incrementCounter: (state, action) => {
			state = {
				count: state.count + (action.payload || 1),
			};
			return state;
		},
		decrementCounter: (state, action) => {
			state = {
				count: state.count - (action.payload || 1),
			};
			return state;
		},
	},
});
export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;
