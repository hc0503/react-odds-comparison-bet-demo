import {
	configureStore,
	getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
	whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [
				FLUSH,
				REHYDRATE,
				PAUSE,
				PERSIST,
				PURGE,
				REGISTER,
			],
		},
	}),
});

export default store;
