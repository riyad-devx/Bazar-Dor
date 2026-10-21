import ProductCard from "@/components/ProdractCard";
import { Product } from "@/type";
import Link from "next/link";
import { Suspense } from "react";

type Props = {
  params: Promise<{ id: string }>;
};


const CategoryProducts = async ({ id }: { id: string }) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("পণ্য লোড করা যায়নি");
  }

  const response = await res.json();

  const products: Product[] = Array.isArray(response)
    ? response
    : Array.isArray(response.data)
      ? response.data
      : [];

  // Get category information from the products
  const categoryName = products[0]?.categoryNameBn || "সকল পণ্য";
  const categoryIcon = products[0]?.categoryIcon || "🛒";

  return (
    <div className="min-h-screen px-3 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl">

        {/* Category Header */}
        <div className="mb-6 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex items-center gap-4 p-5 sm:p-7">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-4xl">
              {categoryIcon}
            </div>

            <div>
              <p className="mb-1 text-xs font-semibold text-green-600">
                পণ্যের ক্যাটাগরি
              </p>

              <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {categoryName}
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                নিত্যপ্রয়োজনীয় পণ্যের বাজার দর ও মূল্য পরিবর্তন দেখুন।
              </p>
            </div>
          </div>

          <div className="h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-lime-300" />
        </div>

        {/* Product Toolbar */}
        <div className="mb-5 flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-bold text-gray-800">সকল পণ্য</h2>

            <p className="mt-1 text-sm text-gray-500">
              মোট{" "}
              <span className="font-semibold text-green-700">
                {products.length}
              </span>{" "}
              টি পণ্য পাওয়া গেছে
            </p>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-sm text-gray-600">
              সাজান:
            </label>

            <select
              id="sort"
              defaultValue="default"
              className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-green-500"
            >
              <option value="default">ডিফল্ট</option>
              <option value="low">দাম: কম থেকে বেশি</option>
              <option value="high">দাম: বেশি থেকে কম</option>
            </select>
          </div>
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
            <div className="mb-3 text-5xl">🛒</div>

            <h2 className="font-bold text-gray-800">
              কোনো পণ্য পাওয়া যায়নি
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              এই ক্যাটাগরিতে বর্তমানে কোনো পণ্যের তথ্য নেই।
            </p>

            <Link
              href="/"
              className="mt-5 inline-block rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
            >
              হোম পেজে ফিরে যান
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const CategoryPage = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <Suspense
      fallback={
        <div className="flex min-h-60 items-center justify-center">
          <p className="animate-pulse text-sm text-green-700">
            পণ্য লোড হচ্ছে...
          </p>
        </div>
      }
    >
      <CategoryProducts id={id} />
    </Suspense>
  );
};

export default CategoryPage;