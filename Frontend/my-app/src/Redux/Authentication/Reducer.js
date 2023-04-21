
const initialState = {
    loading : false , 
     userData:[] ,
    isError: false , 
}

const ReducerAuth = (oldstate=initialState , action)=>{

    switch(action.type){

        case "GET_DATA_LOADING_AUTH":
         return  {...oldstate , loading:true }
        
         case "GET_DATA_SUCCESS_AUTH":
         return {...oldstate , userData:action.payload , loading:false}

         case "GET_DATA_ERROR_AUTH":
            return{...oldstate , isError:true , loading:false}

        default:
            return oldstate
        }
}

export {ReducerAuth}