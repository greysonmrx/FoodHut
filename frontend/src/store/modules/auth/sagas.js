import { takeLatest, call, put, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import { signInSuccess, signFailure } from "./actions";
import api from "../../../services/api";
import history from "../../../services/history";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", {
      email,
      password
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    api.defaults.headers.Authorization = `Bearer ${token}`;
    history.push("/dashboard");
  } catch (err) {
    toast.error(err.response.data.message);

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn)
]);
