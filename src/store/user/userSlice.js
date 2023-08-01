import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	entities: [],
	status: null,
};

const userSlice = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {
		signUp(state, action) {
			state.entities.push(action.payload);
		},
	},
});

export const { signUp } = userSlice.actions;

export default userSlice.reducers;
