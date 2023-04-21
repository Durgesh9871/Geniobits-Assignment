

const initialState = {
    loading : false , 
    realState:[] ,
    isError: false , 
}

const realStateReducer = (oldstate=initialState , action)=>{
                switch(action.type){

                case "GET_DATA_LOADING":
                 return  {...oldstate , loading:true }
                
                 case "GET_DATA_SUCCESS":
                 return {...oldstate , realState:action.payload , loading:false}

                 case "GET_DATA_ERROR":
                    return{...oldstate , isError:true , loading:false}

                default:
                    return oldstate
                }
}

export {realStateReducer}