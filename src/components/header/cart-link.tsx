"use client"
import Link from "next/link"
import Image from "next/image"
import { useSelector } from "react-redux"

export const CartLink = () => {
    const { cart } = useSelector((state: any) => state.cart)

    return (
        <Link href="/cart" className="h-fit flex items-center">
            <p className="mr-[4px]">{cart?.length ?? 0}</p>
            <Image src="/icons/cart.svg" width={24} height={24} alt='cart' className='cursor-pointer' />
        </Link>
    )
}