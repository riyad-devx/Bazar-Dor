
import Link from "next/link";

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

const ProductCard = ({ product }: { product: Product }) => {
  const units: Record<string, string> = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
  };

  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  return (
    <Link
       href={`/products/${product.slug || product.id}`}
      className="block rounded-xl border border-green-100 bg-green-50 p-3 transition hover:shadow-sm"
    >
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-xl">
          {product.image}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            {product.nameBn}
          </h3>

          <p className="text-[10px] text-gray-500">
            {units[product.unit] || product.unit}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-end justify-between">
        <div>
          <p className="text-[10px] text-gray-500">আজকের দাম</p>

          <p className="text-base font-bold text-gray-800">
            {product.today.toLocaleString("bn-BD")} টাকা
          </p>
        </div>

        <span
          className={`rounded-full px-2 py-1 text-[9px] font-medium ${
            isUp
              ? "bg-green-50 text-green-600"
              : isDown
                ? "bg-red-50 text-red-600"
                : "bg-gray-100 text-gray-500"
          }`}
        >
          {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
          {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
