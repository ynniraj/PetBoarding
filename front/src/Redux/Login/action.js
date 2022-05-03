import axios from "axios";
export const USER_LOGIN = "USER_LOGIN";
export const ADMIN_LOGIN = "ADMIN_LOGIN";
export const USER_IMAGE = "USER_IMAGE";


export const USER_ERROR = "USER_ERROR";
export const USER_LOADING = "USER_LOADING";
export const LOGIN_LOGOUT = "LOGIN_LOGOUT";

export const loginLoading = () => ({ type: USER_LOADING });

export const loginError = () => ({ type: USER_ERROR });

export const userLogin = (payload) => ({ type: USER_LOGIN, payload })
export const adminLogin = (payload) => ({ type: ADMIN_LOGIN, payload })
export const userImage = (payload) => ({ type: USER_IMAGE, payload })


export const loginSuccessData = (data, navigate, toast) => (dispatch) => {
    dispatch(loginLoading());
    axios
        .post("https://petshop-project.herokuapp.com/login", data)
        .then((res) => {
            console.log(res);
            if (res.data.user.username === "admin") {
                dispatch(adminLogin(true));
                localStorage.setItem("admin", "true");
                toast.success("Admin Login Successful");
            }
            localStorage.setItem("token", res.data.token);

            dispatch(userLogin(res.data.token));
            dispatch(userImage(res.data.user.image));
            localStorage.setItem("user_id", res.data.user._id);
            localStorage.setItem("user_image", res.data.user.image);
            toast.success("Login Successful");
            setTimeout(() => {
                navigate("/");
            }, 2000);
        })
        .catch((err) => {
            dispatch(loginError());
            toast.error("Login failed please fill correct details");
            console.log(err);
        });
};