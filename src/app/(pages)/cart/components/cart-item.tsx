import { Button } from "@/components/button/button";
import { decreaseQuantity, increaseQuantity, removeItemFromCart } from "@/store/slices/cartSlice";
import { CartItem as CartItemType } from "@/types/product";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface Props {
    item: CartItemType
}

export default function CartItem({ item }: Props) {
    const dispatch = useDispatch()

    return (
        <section className="w-full">
            <div className="border-b border-b-neutral-300 py-[40px]">
                <div className="flex gap-[16px] md:gap-[36px]">
                    <div className="shrink-0 bg-white drop-shadow-[0_0px_30px_rgba(0,0,0,0.15)] p-[16px] rounded-[10px]">
                        <Image
                            src={item?.image}
                            alt={item?.title}
                            width={114}
                            height={160}
                            className="flex-1 w-[71px] md:w-[114px] h-[114px] md:h-[160px] object-cover"
                        />
                    </div>
                    <div className="w-full flex flex-col justify-between">
                        <div className="mb-[19px] md:mb-[20px] text-black">
                            <h3 className="text-base sm:text-[20px] mb-[8px] font-semibold">{item?.title}</h3>
                            <p className="text-sm font-normal mb-[8px]">Category: {item?.category}</p>
                            <p className="text-sm font-normal mb-[20px]">Unit price: ${item?.price}</p>
                            <p className="text-base md:text-[20px] font-bold">Sub total: ${item?.sub_total}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <Button
                                className="text-sm text-black font-medium p-[8px] border border-neutral-300"
                                onClick={() => dispatch(removeItemFromCart(item.id))}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6H5M5 6H21M5 6V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6H5ZM8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M10 11V17M14 11V17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Button>
                            <div className="flex border border-neutral-300 rounded-[4px]">
                                <Button
                                    className="p-[7px] cursor-pointer"
                                    onClick={() => dispatch(decreaseQuantity(item.id))}
                                >
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5835 11H17.4168" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Button>
                                <p className="text-[14px] text-black font-medium py-[7px] px-[16px] border-x border-x-neutral-300 cursor-default">{item?.quantity ?? 0}</p>
                                <Button
                                    className="p-[7px] cursor-pointer"
                                    onClick={() => dispatch(increaseQuantity(item.id))}
                                >
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4.58203V17.4154M5 10.9987H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}