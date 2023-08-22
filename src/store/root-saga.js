import { all, call } from "redux-saga/effects";

import { streamSaga } from "./stream/stream.saga";

export function* rootSaga() {
	yield all([call(streamSaga)]);
}
