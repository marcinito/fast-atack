const nameState={
    name:""
}
const nameReducer=(state=nameState,action)=>{
    switch(action.type){
case "name":
    return {...state,name:action.payload}
    default:
        return state
    }
}
export default nameReducer