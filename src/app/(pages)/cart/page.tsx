import ReduxProvider from "@/components/redux-provider/redux-provider";
import CartWrapper from "./components/cart-wrapper";

export default function Cart() {
  return (
    <main className="ng-outer-container flex min-h-screen flex-col items-center justify-between py-[40px]">
      <div className="ng-inner-container">
        <h1 className="text-center text-[30px] font-bold mb-[30px]">Cart</h1>
        <ReduxProvider>
          <CartWrapper />
        </ReduxProvider>
      </div>
    </main>
  );
}
