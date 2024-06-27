import Link from "next/link";

export default function EmptyState() {
    return (
        <div className="flex flex-col justify-center items-center min-h-[50vh] sm:min-h-[70vh]">
            <p className="text-md md:text-[30px] text-neutral-800 font-medium mt-[24px] mb-[44px]">No items in cart</p>
            <Link
                href="/"
                className="py-[16px] px-[30px] bg-primary-base text-white rounded-[10px]"
            >
                Explore products
            </Link>
        </div>
    )
}