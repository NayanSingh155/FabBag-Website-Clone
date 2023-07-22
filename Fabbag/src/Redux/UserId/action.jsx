export const ADD_USERID="ADD_USERID";


export const addUserId=(data)=>{
    return {
        type:ADD_USERID,
        payload:data
    }
    
    }