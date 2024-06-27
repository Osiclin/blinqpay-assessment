import { Category, ProductWrapper } from "@/components";
import { Suspense } from "react";

interface SearchParams {
  category?: string;
}

interface Props {
  searchParams: SearchParams;
}

export default function Home({ searchParams }: Props) {
  const selectedCategory = searchParams.category ?? '';

  return (
    <main>
      <Category />
      <div className="ng-outer-container flex min-h-screen flex-col items-center justify-between py-[40px]">
        <div className="ng-inner-container">
          <Suspense key={selectedCategory} fallback={<>Loading products...</>}>
            <ProductWrapper selectedCategory={selectedCategory} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
