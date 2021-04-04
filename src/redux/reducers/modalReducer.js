
const INITIAL_STATE = {
    value:false,
    id:0
}

const modalReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case "OPEN_MODAL":
            return {
                value: true,
                id:action.payload
            }
        case "CLOSE_MODAL":
            return {
                value: false,
                id:0
            }
        default:
            return state
    }
}

export default modalReducer