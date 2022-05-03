import { USER_LOGIN, ADMIN_LOGIN, USER_IMAGE, USER_ERROR, USER_LOADING } from "./action";

const initState = { token: "", admin: false, image: "", loading: false, error: false };

export const LogInReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case USER_LOADING:
            return { ...store, loading: true };

        case USER_ERROR:
            return { ...store, loading: false, error: true, isAuth: false };

        case USER_LOGIN:
            return { ...store, loading: false, error: false, token: payload };

        default:
            return store;
    }
};


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
export const userImageReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case USER_IMAGE:
            return {
                ...store,
                image: payload,
            }
        default:
            return store;
    }

}




