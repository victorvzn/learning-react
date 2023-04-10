import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { rollbackUser } from "./users/slice";

const persistenceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		// console.log(store.getState());
		// console.log(action);
		next(action);
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
		// console.log(store.getState());
	};

const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
		const { type, payload } = action;

		const previousState = store.getState()

		// console.log({ action, state: store.getState() });
		// console.log({ type, payload });

		next(action);

		if (type === "users/deleteUserById") {
			const userToRemove = previousState.users.find(user => user.id === payload)

			fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, { method: "DELETE" })
				.then((res) => {
					// throw new Error('Error al eliminar el usuario')
					if (res.ok) {
						return toast.success(`Usuario ${payload} eliminado correctamente`);
					}
				})
				.catch((err) => {
					toast.error(`Error al eliminar el usuario`)
					
					if (userToRemove) store.dispatch(rollbackUser(userToRemove))
					
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
