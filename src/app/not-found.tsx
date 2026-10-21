import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative flex  flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50 blur-3xl"></div>

      <div className="relative">
        <h1 className="text-[120px] font-black leading-none tracking-tighter text-red-600 drop-shadow-sm md:text-[180px]">
          404
        </h1>

        <span className="absolute -right-3 top-2 rotate-12 rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-600">
          Oops!
        </span>
      </div>

      <div className="relative mt-5">
        <div className="mb-4 text-5xl">🔍</div>

        <h2 className="text-2xl font-extrabold text-gray-800 md:text-4xl">
          Page Not Found!
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 md:text-base">
          দুঃখিত! তুমি যে পেজটি খুঁজছো, সেটি খুঁজে পাওয়া যায়নি।
          <br />
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-red-200 transition duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
        >
          <span>←</span>
          Back to Home
        </Link>

        <p className="mt-6 text-xs font-medium tracking-wide text-gray-400">
          BAZAR DOR · FIND YOUR WAY BACK
        </p>
      </div>
    </div>
  );
};

export default NotFound;
