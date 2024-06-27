import { Product } from "@/types/product"

/* 
For the sake of this assessment, i will be putting the BASE_URL here as a constant.
Normally it would be in a .env file.
*/
const BASE_URL = "https://fakestoreapi.com"

export async function getProducts(category?: string) {
    try {
        const filter = category ? `/category/${category}` : ""
        const response = await fetch(`${BASE_URL}/products${filter}`)
        const products = await response.json()
        return products as Product[]
    } catch (error) {
        console.log(error)
    }
}

export async function getCategories() {
    try {
        const response = await fetch(`${BASE_URL}/products/categories`)
        const categories = await response.json()
        return categories as string[]
    } catch (error) {
        console.log(error)
    }
}