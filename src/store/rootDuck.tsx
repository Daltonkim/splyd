import { combineReducers } from "redux";

import { spyld } from "../components/index";

export const rootReducer = combineReducers({
  i18n: spyld.i18n.reducer,
  builder: spyld.builder.reducer,
});

export function* rootSaga() {
  // yield all([auth.saga()]);
}
