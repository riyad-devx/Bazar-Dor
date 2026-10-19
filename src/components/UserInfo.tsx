import Link from "next/link";
import React from "react";

const UserInfo = () => {
  return (
    <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
      <div>
        <Link
          href="/signin"
          className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700"
        >
          সাইন ইন
        </Link>

        <Link
          href="/signup"
          className="btn bg-green-600 px-3 py-1.5 font-semibold text-white transition-colors"
        >
          সাইন আপ
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
