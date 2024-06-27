"use client"
import { CartItem, Product } from "@/types/product"
import { Button } from "../button/button"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/store/slices/cartSlice"

interface Props {
    product: Product
}

export const AddToCartButton = ({ product }: Props) => {
    const { cart } = useSelector((state: any) => state.cart)
    const dispatch = useDispatch()

    const itemIsAdded = cart.find((item: CartItem) => item.id === product.id)
    
    return (
        <Button
            theme="primary"
            size="40"
            className="font-normal w-[130px]"
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
            disabled={itemIsAdded}
        >
            {itemIsAdded ? "Added" : "Add to cart"}
        </Button>
    )
}