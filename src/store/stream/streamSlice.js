import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	entities: [],
	status: null,
};

const streamSlice = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {
		videoInput(state, action) {
			state.entities.push(action.payload);
		},
	},
});

export const { videoInput } = streamSlice.actions;

export default streamSlice.reducers;
