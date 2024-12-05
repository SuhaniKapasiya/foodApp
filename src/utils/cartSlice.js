import {createSlice}  from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {

    //Vanialla(older)Redux => DON"T MUTATE STATE,returning was mandatory
    //const newState = [...state];
    //return newState;


    //Redux Toolkit
    //we HAVE to mutate the state
    //return is not mandatory
    // Redux use Immer libary  behind the seen which done in Vanilla Redux by developer
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    //originalState = ["pizza"]
    clearItem: (state) => {
      //RTK - either Mutate the existing state or return a new Stae
      //sate.items.length = 0; // originalState =[]
      // state.items = []; //originalState =[]

      return { items: [] }; //this time new [] will be replace inside originalState = []
    },
  },
});

export const {addItem,removeItem,clearItem} = cartSlice.actions

export default cartSlice.reducer