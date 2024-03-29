//import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrease(state, action) {
            state.counter = state.counter - action.payload;
        },
        toggle(state) {
            state.showCounter =!state.showCounter;
        }
    }
})

const initialAuthState = {isAuthenticated: false};

const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})
// const counterReducer = (state = initialState, action)=>{
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 5,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 5,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'decrease'){
//         return {
//             counter: state.counter - action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'toggle'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// }

const Store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default Store;