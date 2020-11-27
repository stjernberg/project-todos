import { createSlice } from '@reduxjs/toolkit'


  const initialState= {
  
    items: [
      {
        id: 1,
        text: 'Write an article', 
        done: false   
      },
      {
        id: 2,
        text: 'Add styled components',
        done: false 
        
      },
      {
        id: 3,
        text: 'Send in report', 
        done: false 
      },
      {  
        id: 4, 
        text: 'Exercise',
        done: false     
      },
    ]
  }
 
  export const tasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {
      addTask:(state, action) =>{
        state.items.push(action.payload)
      },
      removeTask: (state, action) => {
        const itemId = action.payload;
        const filteredList = state.items.filter((item) => item.id !== itemId);
        state.items = filteredList;
      }
      // setDone: (state, action) => {
      //   const {index} = action.payload
      //   state.items[index].done = done
      // }
    }
})