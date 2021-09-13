import { createSlice } from "@reduxjs/toolkit"

let initialState = []

let todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addItem : (state, action) => {
            state.push(action.payload)
        },
        toggleStrike : (state, action) => {
            let id  = action.payload
            let item = state.find(item => item.id === id)
            if(item) {
                item.striked = !(item.striked)
            }
        },
        deleteItem : (state, action) => {
            let id = action.payload
            let index = state.findIndex(item =>  item.id === id)
            console.log(index)
            if(index != null) {
                state.splice(index,1)
            }
        }
    }
})

export default todoSlice.reducer
export const {addItem, toggleStrike, deleteItem} = todoSlice.actions