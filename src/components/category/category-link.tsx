"use client"
import "./category.css"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface Props {
    title: string,
    href: string
}

export const CategoryLink = ({ title, href }: Props) => {
    const searchParams = useSearchParams()
    const category = searchParams.get("category") ?? "All"

    return (
        <Link
            href={href}
            className={`bp-category-list ${category === title ? "active" : "inactive"}`}
        >
            {title}
        </Link>
    )
}