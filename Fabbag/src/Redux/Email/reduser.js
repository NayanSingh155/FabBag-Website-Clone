import { ADD_EMAIL } from "./action";

const init={email:""}

export const emailReducer=(store=init,{type,payload})=>{
    switch (type){
        case ADD_EMAIL:
            return {...store,email:payload};

            default:
         return store;
        };
};