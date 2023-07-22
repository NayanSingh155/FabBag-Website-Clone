import { ADD_PRODUCTS} from "./actions";

function cartReducer(store=[],{type,payload}){
    switch(type){
        case ADD_PRODUCTS:
            return [...payload];
        default:
            return store;
    }

}

export {cartReducer};
