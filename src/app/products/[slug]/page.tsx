import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

type Market = {
  division: string;
  market: string;
  min: number;
  max: number;
};

type Product = {
  id: number;
  slug: string;
  nameBn: string;
  image: string;
  today: number;
  categoryNameBn: string;
  categoryIcon?: string;
  unit?: string;
  markets: Market[];
};

const getProduct = async (slug: string): Promise<Product | null> => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { next: { revalidate: 60 } },
  );

  if (!res.ok) throw new Error("Failed to fetch products");

  const products: Product[] = await res.json();
  return products.find((p) => p.slug === slug) || null;
};

const formatPrice = (price: number) =>
  `৳${price.toLocaleString("en-BD")}`;

const getUnit = (unit?: string) => unit || "প্রতি একক";

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  const validMarkets = (product.markets || []).filter(
    (market) =>
      Number.isFinite(Number(market.min)) &&
      Number.isFinite(Number(market.max)),
  );

  const allMins = validMarkets.map((m) => Number(m.min));
  const allMaxs = validMarkets.map((m) => Number(m.max));

  const minPrice = allMins.length ? Math.min(...allMins) : product.today;
  const maxPrice = allMaxs.length ? Math.max(...allMaxs) : product.today;

  const avgPrice = validMarkets.length
    ? Math.round(
        validMarkets.reduce(
          (sum, m) => sum + (Number(m.min) + Number(m.max)) / 2,
          0,
        ) / validMarkets.length,
      )
    : product.today;

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-5 text-[#27332b]">
      <div className="mx-auto max-w-5xl space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-green-700">
            হোম
          </Link>
          <span>›</span>
          <span>{product.categoryNameBn}</span>
          <span>›</span>
          <span className="font-medium text-gray-700">
            {product.nameBn}
          </span>
        </div>

        <section className="rounded-xl border border-[#e1e9e1] bg-[#fbfdfb] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f0f5f0] text-3xl">
              {product.image?.startsWith("http") ? (
                <Image
                  src={product.image}
                  alt={product.nameBn}
                  className="h-full w-full object-contain"
                />
              ) : (
                product.categoryIcon || product.image || "🛒"
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-extrabold">{product.nameBn}</h1>
              <p className="mt-1 text-xs text-gray-500">
                {product.categoryNameBn} · {getUnit(product.unit)}
              </p>
              <p className="mt-2 text-xs text-gray-600">
                {product.nameBn} এর বিভিন্ন বাজারের আজকের দাম তুলনা করুন।
              </p>
            </div>

            <div className="hidden rounded-xl bg-[#f0f5f0] px-4 py-3 text-center sm:block">
              <p className="text-xs text-gray-500">আজকের দাম</p>
              <p className="mt-1 text-xl font-extrabold">
                {formatPrice(product.today)}
              </p>
              <p className="text-[10px] text-gray-500">
                {getUnit(product.unit)}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-[#e1e9e1] bg-[#fbfdfb] p-3">
          <h2 className="mb-3 text-sm font-bold">
            আজকের দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="rounded-xl border border-[#e1e9e1] p-3">
              <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
              <h3 className="mt-1 text-xl font-extrabold text-green-600">
                {formatPrice(minPrice)}
              </h3>
              <p className="mt-1 text-[10px] text-gray-500">
                {getUnit(product.unit)}
              </p>
            </div>

            <div className="rounded-xl border border-[#e1e9e1] p-3">
              <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
              <h3 className="mt-1 text-xl font-extrabold text-red-500">
                {formatPrice(maxPrice)}
              </h3>
              <p className="mt-1 text-[10px] text-gray-500">
                {getUnit(product.unit)}
              </p>
            </div>

            <div className="rounded-xl border border-[#e1e9e1] p-3">
              <p className="text-xs text-gray-500">গড় দাম</p>
              <h3 className="mt-1 text-xl font-extrabold text-green-700">
                {formatPrice(avgPrice)}
              </h3>
              <p className="mt-1 text-[10px] text-gray-500">
                {getUnit(product.unit)}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-[#e1e9e1] bg-[#fbfdfb] p-3">
          <div className="mb-3">
            <h2 className="text-sm font-bold">
              🏪 বাজারভিত্তিক আজকের দাম
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              বিভাগ অনুযায়ী বাজারের দাম তুলনা করুন।
            </p>
          </div>

          {validMarkets.length === 0 ? (
            <div className="rounded-xl border border-[#e1e9e1] py-10 text-center">
              <p className="text-3xl">🏪</p>
              <h3 className="mt-3 text-sm font-bold">
                বাজারের তথ্য পাওয়া যায়নি
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                এই পণ্যের বাজারভিত্তিক দাম এখনো উপলব্ধ নেই।
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-[#e1e9e1]">
              <table className="w-full border-collapse text-left text-xs">
                <thead className="bg-[#f5f8f5] text-gray-600">
                  <tr>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">
                      বাজারের নাম
                    </th>
                    <th className="whitespace-nowrap px-3 py-3 font-medium">
                      বিভাগ
                    </th>
                    <th className="whitespace-nowrap px-3 py-3 text-right font-medium">
                      সর্বনিম্ন
                    </th>
                    <th className="whitespace-nowrap px-3 py-3 text-right font-medium">
                      সর্বোচ্চ
                    </th>
                    <th className="whitespace-nowrap px-3 py-3 text-right font-medium">
                      গড় দাম
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {validMarkets.map((market, index) => (
                    <tr
                      key={`${market.division}-${market.market}-${index}`}
                      className={`border-t border-[#dce5dc] transition hover:bg-[#e8f0e8] ${
                        index % 2 === 0
                          ? "bg-[#fbfdfb]"
                          : "bg-[#f0f5f0]"
                      }`}
                    >
                      <td className="whitespace-nowrap px-3 py-3 font-medium">
                        {market.market}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-gray-600">
                        {market.division}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-right text-green-700">
                        {formatPrice(Number(market.min))}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-right text-red-500">
                        {formatPrice(Number(market.max))}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-right font-bold">
                        {formatPrice(
                          Math.round(
                            (Number(market.min) + Number(market.max)) / 2,
                          ),
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="mt-3 text-[10px] leading-5 text-gray-500">
            দ্রষ্টব্য: বাজার ও সময়ভেদে দাম পরিবর্তিত হতে পারে।
          </p>
        </section>
      </div>
    </main>
  );
}