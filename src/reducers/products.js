export default (state = [], action ) => {
    switch (action.type) {
        case "PRODUCT_FILTER":
            return action.payload;
        case "PRODUCT_FILTER_SINGLE":  
            return action.payload;
        default:
            break;
    }

    

    return state;
}