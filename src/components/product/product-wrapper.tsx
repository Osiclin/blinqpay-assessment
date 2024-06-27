import { ProductCard } from "./product-card"
import { getProducts } from "@/actions"

export const ProductWrapper = async ({ selectedCategory }: { selectedCategory: string }) => {
    const products = await getProducts(selectedCategory) ?? []

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-[20px] gap-y-[40px]">
            {products?.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
    )
}