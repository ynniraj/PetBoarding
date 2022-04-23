import { USER_LOGIN, ADMIN_LOGIN } from "./action";

const initState = { token: "", admin: false }

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
export const adminReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case ADMIN_LOGIN:
            return {
                ...store,
                admin: payload,
            }
        default:
            return store;
    }

} 