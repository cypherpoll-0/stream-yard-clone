import { call, all, takeLatest, put } from "redux-saga/effects";

import { videoInput } from "./streamSlice";

function* videoOutputSaga(action) {
	try {
		const videoStream = yield call(videoInput, action);
		yield put();
	} catch (error) {
		yield put();
	}
}

export function* onVideoOutput() {
	yield takeLatest("type", videoOutputSaga);
}

export function* streamSaga() {
	yield all([call(onVideoOutput)]);
}
