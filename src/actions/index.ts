import { Product } from "@/types/product"

export async function getProducts(category?: string) {
    try {
        const filter = category ? `/category/${category}` : ""
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products${filter}`)
        const products = await response.json()
        return products as Product[]
    } catch (error) {
        console.log(error)
    }
}

export async function getCategories() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/categories`)
        const categories = await response.json()
        return categories as string[]
    } catch (error) {
        console.log(error)
    }
}