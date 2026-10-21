import { Suspense } from "react";
import AllProdract from "@/components/AllProdract";
import Banner from "@/components/Banner";
import TopFallers from "@/components/TopFallers";
import TopRisers from "@/components/TopRisers";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <Banner />

      <Suspense
        fallback={
          <div className="py-10 text-center text-gray-500">
            পণ্য লোড হচ্ছে...
          </div>
        }
      >
        <TopRisers />
        <TopFallers />
        <AllProdract />
      </Suspense>
    </div>
  );
}
