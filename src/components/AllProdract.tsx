import React from "react";
import ProductCard from "./ProdractCard";

type Product = {
  id: number;
  slug: string;
  nameBn: string;
  today: number;
  unit: string;
  image: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
};

const AllProdract = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await res.json();

  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <h2 className="mb-1 text-2xl font-bold text-gray-800">
        সব পণ্য
      </h2>
      
      <p className="text-red-400">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProdract;