import {configureStore, createSlice} from '@reduxjs/toolkit'
import { itmes } from '../../data'



const addBagSlice = createSlice({
    name:'bag',
    initialState :{
        arr:[],
       
    },
    reducers:{
        addToBag:(state,action)=>{
            
            // console.log(state.arr.length)
          
            state.arr  = state.arr.filter((arr)=>arr.id!==action.payload.items.id)
            
            state.arr.push(action.payload.items)
            // state.arr = state.arr.filter((arr)=>arr.click =true)
           
            
        },
        deletItem:(state,action)=>{
            console.log(action.payload.items)
            state.arr = state.arr.filter((arr)=>arr.id!==action.payload.items.id)
            // state.arr.push(action.payload.items)
           
        }
    }
})

const addButtonSlice = createSlice({
    name :"addCartButton-State",
    initialState:{
        btnBool :[],
    },
    reducers:{
        addedCart:(state,action)=>{
            state.btnBool = action.payload.items;
        }
    }

})
const addWishSlice = createSlice({
    name:"wish",
    initialState:{
        Bag:[],
        getWishClicked : false
    },
    reducers:{
        addToWish:(state,action)=>{
            state.Bag = state.Bag.filter((arr)=>arr.id !==action.payload.items.id);
            state.Bag.push(action.payload.items);
            
            console.log("calling")
            console.log("calling wish")
            console.log(state.Bag)
            state.getWishClicked = true

        },
        deleteWish:(state,action)=>{
            console.log("calling delete wish")
            state.Bag = state.Bag.filter((arr)=>arr.id !== action.payload.items.id)
        }
    }
})

const store = configureStore({
   reducer:{
    bag : addBagSlice.reducer,
    wish:addWishSlice.reducer,
   }
})


export const bagAction = addBagSlice.actions;
export const wishAction = addWishSlice.actions;
export default store;