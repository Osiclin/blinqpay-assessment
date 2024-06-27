import { getCategories } from "@/actions"
import "./category.css"
import { CategoryLink } from "./category-link"

export const Category = async () => {
    const categories = await getCategories() ?? []

    return (
        <div className="ng-outer-container bg-white p-[16px] sticky top-[65px] md:top-[65px] z-20">
            <ul className="ng-inner-container flex flex-wrap items-center whitespace-nowrap">
                <li className="bp-category-list">
                    <CategoryLink title="All" href="/" />
                </li>
                {categories.map((item) =>
                    <li key={item}>
                        <CategoryLink title={item} href={`?category=${item}`} />
                    </li>
                )}
            </ul>
        </div>
    )
}