//API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES={
    loading:{
        title:"Loading",
        message:"Data is being Loading Please wait..."
    },
    success:{
        title:"Success",
        message:"Data has been successfully loaded"
    },
    responseFailure:{
        title:"Error",
        message:"An error occured while fetching response from the server. please try again"
    },
    requestFailure:{
        title:"Error",
        message:"An error occured while sending request to the server. please try again"
    },
    networkError:{
        title:"Network Error",
        message:"Please check your internet connection and try again"
    }
}

//API SERVICE CALL
//SAMPLE REQUEST 
//NEED SERVICE CALL:{url:'/',methods:'POST/GET/PUT/DELETE',params:true/false.query:true/false}
export const SERVICE_URLS={
    
    userSignup:{url:'/signup',method:'POST'},
    userLogin:{url:'/login',method:'POST'}
}