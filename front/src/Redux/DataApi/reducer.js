
const initState = { products: [], selectedProduct: [], loading: false, error: false };

export const getDataReducer = (state = initState, action) => {
    switch (action.type) {

        case "PRODUCTS_LOADING":
            return { ...state, loading: true };

        case "PRODUCTS_ERROR":
            return { ...state, loading: false, error: true, isAuth: false };

        case "PRODUCTS_SUCCESS":

            return {
                ...state,
                products: action.payload,
                loading: false,
                error: false
            }

        case "SELECT_PRODUCT":
            return {
                ...state,
                selectedProduct: action.payload
            }

        default:
            return state;
    }

}
