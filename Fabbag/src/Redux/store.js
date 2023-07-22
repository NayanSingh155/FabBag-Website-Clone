import { legacy_createStore as createStore,combineReducers,applyMiddleware } from "redux";
import { emailReducer } from "./Email/reduser"
import { UserIdReducer } from "./UserId/reduser";
import {cartReducer} from './cart/reducer';
import thunk from "redux-thunk";

const RootReducer=combineReducers({
   email:emailReducer,
   userId:UserIdReducer,
   cart: cartReducer
});

export const store=createStore(
    RootReducer,
      applyMiddleware(thunk)
   //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    );
