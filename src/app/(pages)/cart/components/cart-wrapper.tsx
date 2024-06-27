"use client"
import { Button } from "@/components/button/button";
import { useSelector } from "react-redux";
import { CartItem as CartItemType } from "@/types/product";
import CartItem from "./cart-item";
import EmptyState from "./empty-state";

export default function CartWrapper() {
    const { cart } = useSelector((state: any) => state.cart)
    const total = cart.reduce((acc: number, item: CartItemType) => {
        return acc + item.sub_total
    }, 0)

    return (
        <>
            {cart.length ?
                <>
                    <div className="w-full md:w-[650px] mb-[40px]">
                        {cart.map((item: CartItemType) =>
                            <CartItem
                                key={item.id}
                                item={item}
                            />
                        )}
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-xl font-bold mb-[20px]">Total: ${total.toFixed(2)}</p>
                        <Button size="49" theme="primary" className="w-full sm:w-[250px]">
                            CHECKOUT
                        </Button>
                    </div>
                </> :
                <EmptyState />
            }
        </>
    );
}
