import React, { useRef } from "react";
import { useDispatch } from "react-redux";

//import streamSlice from "../../store/stream/streamSlice";
import { onVideoOutput } from "../../store/stream/stream.saga";

function Stream() {
	const videoRef = useRef();
	const dispatch = useDispatch();
	//const { videoInput } = streamSlice.actions;
	const startCapture = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true,
			});
			videoRef.current.srcObject = stream;
			dispatch(onVideoOutput(stream));
		} catch (error) {
			console.error("Error accessing media devices:", error);
		}
	};

	return (
		<div>
			<h1>You are Live!!!</h1>
			<div>
				<video ref={videoRef} autoPlay></video>
				<button onClick={startCapture}>Start Capture</button>
			</div>
			<label>Stream link</label>
			<input />
			<button>Link input</button>
		</div>
	);
}

export default Stream;
