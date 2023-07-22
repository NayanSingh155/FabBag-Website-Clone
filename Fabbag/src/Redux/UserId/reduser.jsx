import { ADD_USERID } from "./action";

const init={userId:""}

export const UserIdReducer=(store=init,{type,payload})=>{
    switch (type){
        case ADD_USERID:
            return {...store,userId:payload};

            default:
         return store;
        };
};