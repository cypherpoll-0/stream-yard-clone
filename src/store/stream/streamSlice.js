import { createSlice } from "@reduxjs/toolkit";
import socket from "socket.io-client";

const initialState = {
	entities: [],
	status: null,
};

const streamSlice = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {
		videoInput(state, action) {
			socket.on("streamServer", () => {});
		},
	},
});

export const { videoInput } = streamSlice.actions;

export default streamSlice.reducers;
