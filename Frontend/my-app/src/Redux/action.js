import axios from "axios"

const getPropertyData = (dispatch)=>{
 dispatch({type:"GET_DATA_LOADING"})
 return axios.get(`https://long-pear-giraffe-gown.cyclic.app/api/realState`)
 .then((res)=> dispatch({type:"GET_DATA_SUCCESS" , payload:res.data}))
 .catch((err)=> dispatch({type:"GET_DATA_ERROR"}))

}

export {getPropertyData}