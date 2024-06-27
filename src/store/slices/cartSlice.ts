import { CartItem } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    cart: CartItem[];
}

const initialState: CartState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                item.sub_total = item.quantity * item.price;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.sub_total = item.quantity * item.price;
            }
        },
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const { price, quantity } = action.payload
            state.cart = [...state.cart, {...action.payload, sub_total: price * quantity}]
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            const item = state.cart.filter(item => item.id !== action.payload);
            state.cart = item
        }
    }
})

export const { increaseQuantity, decreaseQuantity, addToCart, removeItemFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer