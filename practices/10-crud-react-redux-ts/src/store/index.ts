import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer from "./users/slice";

const persistenceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		// console.log(store.getState());
		// console.log(action);
		next(action);
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
		// console.log(store.getState());
	};

const syncWithDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const { type, payload } = action;

		// console.log({ action, state: store.getState() });
		// console.log({ type, payload });

		next(action);

		if (type === "users/deleteUserById") {
			fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
				method: "DELETE",
			})
				.then((res) => {
					if (res.ok)
						return toast.success(`Usuario ${payload} eliminado correctamente`);
				})
				.catch((err) => {
					console.log("ERROR", err);
				});
		}
	};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistenceLocalStorageMiddleware, syncWithDatabaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
