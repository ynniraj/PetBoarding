import { USER_LOGIN } from "./action";

const initState = { token: "" }

export const LogInReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return {
                ...store,
                token: payload,
            }
        default:
            return store;
    }

} 