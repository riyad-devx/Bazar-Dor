import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

type Price = {
  id: number;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
};

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products"
  );

const data:Price[] = await res.json();

  return (
    <MarqueeText direction="right" duration={12}>
        <div className="overflow-hidden border-y border-gray-200 bg-white mt-0.5 py-1">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...data, ...data].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="mx-5 flex shrink-0 items-center gap-2 text-sm"
          >
            <span>{item.image}</span>

            <span className="font-medium text-gray-700">
              {item.nameBn}
            </span>

            <span className="text-gray-500">
              ৳{item.today}/
              {item.unit === "kg" ? "কেজি" : "লিটার"}
            </span>

            <span
              className={
                item.change.dir === "up"
                  ? "font-semibold text-green-600"
                  : item.change.dir === "down"
                    ? "font-semibold text-red-600"
                    : "font-semibold text-gray-500"
              }
            >
              {item.change.dir === "up"
                ? "▲"
                : item.change.dir === "down"
                  ? "▼"
                  : "—"}{" "}
              {Math.abs(item.change.pct)}%
            </span>

            <span className="ml-3 text-gray-300">•</span>
          </div>
        ))}
      </div>
    </div>
    </MarqueeText>
  );
};

export default Marquee;
