import axios from "axios";

export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";

export const PRODUCTS_ERROR = "PRODUCTS_ERROR";

export const PRODUCTS_LOADING = "PRODUCTS_LOADING";

export const productLoading = () => ({ type: PRODUCTS_LOADING });

export const productError = () => ({ type: PRODUCTS_ERROR });

export const setProducts = (data) => ({
    type: "PRODUCTS_SUCCESS",
    payload: data
})


export const productSuccessData = () => async (dispatch) => {
    dispatch(productLoading());
    await axios
        .get("https://petshop-project.herokuapp.com/getpetshop")
        .then((res) => {
            console.log(res.data);
            dispatch(setProducts(res.data));
        })
        .catch((err) => {
            dispatch(productError());

            console.log(err);
        });
};
export const productSortedData = (type, order) => async (dispatch) => {
    await axios
        .get(`https://petshop-project.herokuapp.com/sortedpetshop?sorttype=${type}&sortdirection=${order}`
        )
        .then((res) => {
            console.log(res.data);
            dispatch(setProducts(res.data));
        })
        .catch((err) => {
            dispatch(productError());

            console.log(err);
        });
};
export const SortedbyNameData = (type, order) => async (dispatch) => {
    await axios
        .get(
            `https://petshop-project.herokuapp.com/getpetbyname?sorttype=${type}&sortdirection=${order}`
        )
        .then((response) => {
            console.log(response.data);
            dispatch(setProducts(response.data));
        })
        .catch((err) => {
            dispatch(productError());

            console.log(err);
        });
};








export const selectProducts = product => ({
    type: "SELECT_PRODUCT",
    payload: product
})