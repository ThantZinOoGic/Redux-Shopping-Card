import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "card",
    initialState : {
        itemsList : [],
        totalQuantity : 0,
        showCarts : false
    },
    reducers : {
        addToCart(state, action) {
            const newItem = action.payload;
            //is exit
            const exitItem = state.itemsList.find(item => item.id === newItem.id);

            if(exitItem)
            {
                exitItem.quantity++;
                exitItem.totalPrice += newItem.price;
            } else {
                state.itemsList.push({
                    id : newItem.id,
                    name : newItem.name,
                    price : newItem.price,
                    totalPrice : newItem.price,
                    quantity : 1
                })
                
                state.totalQuantity ++;
            }
            },
        removeFromCart(state, action) {
            const id = action.payload;
            const exitItem = state.itemsList.find(item => item.id === id);
            if(exitItem.quantity === 1)
            {
                state.itemsList = state.itemsList.filter(item => item.id !== id);
                state.totalQuantity--;
            }
            else
            {
                exitItem.quantity--;
                exitItem.totalPrice -= exitItem.price;
            }
        },
        setShowCart(state) {
            state.showCarts = !state.showCarts;
        }
    }
}
);

export const cartActions = cartSlice.actions;
export default cartSlice;