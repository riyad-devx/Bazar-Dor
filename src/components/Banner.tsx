import Image from "next/image";
import React from "react";

const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Banner = () => {
  return (
    <div className="px-5 py-4">
      <div className="mx-auto flex min-h-48 w-full max-w-5xl items-center justify-between gap-4 rounded-2xl border border-green-100 bg-white p-4 sm:gap-6 sm:p-5">
        {/* Left Content */}
        <div className="min-w-0 flex-1">
          <span className="mb-2 inline-block rounded-full bg-green-100 px-2 py-1 text-[10px] text-green-700">
            {date}
          </span>

          <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-800 sm:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mb-4 max-w-md text-xs leading-6 text-gray-500">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও সরবরাহ দর — বাজারজাতকৃত
            বিভিন্ন পণ্য, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#products"
            className="inline-block rounded-md bg-green-600 px-4 py-2 text-xs text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-green-700"
          >
            সব পণ্যের দাম
          </a>
        </div>

        {/* Right Image */}
        <div className="flex w-20 shrink-0 items-center justify-center sm:w-40">
          <Image
            src="/bazar-hero.png"
            alt="বাজার দর"
            width={400}
            height={400}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;