export const addEntry = (entry) =>({
    type:'ADD_ENTRY',
    payload:entry
})

export const removeEntry = (id) =>({
    type:'REMOVE_ENTRY',
    payload:id
})

export const updateEntry = (id, entry) =>({
    type:'UPDATE_ENTRY',
    payload:{
        id, entry
    }
})