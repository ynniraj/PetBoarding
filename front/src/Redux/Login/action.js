export const USER_LOGIN = "USER_LOGIN";
export const ADMIN_LOGIN = "ADMIN_LOGIN";

export const userLogin = (payload) => ({ type: USER_LOGIN, payload })
export const adminLogin = (payload) => ({ type: ADMIN_LOGIN, payload })