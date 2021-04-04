const INITIAL_STATE = [
    {
    id:1,
    description:'Work Income',
    value:1000,
    isExpense:false
  },{
    id:2,
    description:'Water Bill',
    value:10,
    isExpense:true
  },{
    id:3,
    description:'Freelance Income',
    value:1000,
    isExpense:false
  },{
    id:4,
    description:'Shopping',
    value:1000,
    isExpense:true
  },
  
  ]


const entriesReducer = (state = INITIAL_STATE, action) =>{
    let newEntries
    switch(action.type){
        case "ADD_ENTRY":
            return [...state, action.payload]
        case "REMOVE_ENTRY":
            newEntries = state.filter(e => e.id !== action.payload)
            return newEntries
        case "UPDATE_ENTRY":
            newEntries = [...state]
            const index = newEntries.findIndex(e => e.id === action.payload.id)
            newEntries[index] = {...action.payload.entry}
            return newEntries
        default:
            return state
    }
}

export default entriesReducer