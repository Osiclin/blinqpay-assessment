import { Product } from "@/types/product"
import Image from "next/image"
import { AddToCartButton } from "./add-to-cart-button"
import ReduxProvider from "../redux-provider/redux-provider"

interface Props {
    product: Product,
    className?: string
}

export const ProductCard = ({ className, product }: Props) => {
    return (
        <div className={`flex flex-col justify-between ${className}`}>
            <div>
                <div className="flex justify-center items-center mb-[16px] w-full h-[350px] bg-white drop-shadow-[0_0px_30px_rgba(0,0,0,0.15)] py-[16px] rounded-[10px]">
                    <Image src={product?.image} width={140} height={140} alt={product.title} className="w-auto h-auto" />
                </div>
                <p className="text-[17px] text-black font-bold mb-[4px] line-clamp-2">{product?.title}</p>
                <p className="text-[15px] text-neutral-500 font-normal mb-[16px]">{product?.category}</p>
            </div>
            <div className="flex items-center justify-between">
                <p className={`text-[20px] font-medium text-neutral-base`}>${product?.price}</p>
                <ReduxProvider>
                    <AddToCartButton product={product} />
                </ReduxProvider>
            </div>
        </div>
    )
}