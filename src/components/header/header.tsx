import Link from "next/link"
import { CartLink } from "./cart-link"
import ReduxProvider from "../redux-provider/redux-provider"

export const Header = () => {
    return (
        <header className="ng-outer-container py-[20px] bg-white border-b border-b-neutral-200 sticky top-0 z-10">
            <div className="ng-inner-container flex justify-between items-center">
                <Link href="/">
                    <p>Logo</p>
                </Link>
                <ReduxProvider>
                    <CartLink />
                </ReduxProvider>
            </div>
        </header>

    )
}