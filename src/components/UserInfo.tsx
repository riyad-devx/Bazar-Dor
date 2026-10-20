"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [open, setOpen] = useState(false);

  return (
    <div>
      {user ? (
        <div className="relative">
          {/* Profile Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-lg p-1 hover:bg-gray-100"
          >
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                <Image
                  alt={user.name || "User Avatar"}
                  width={40}
                  height={40}
                  src={
                    user.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHMmlZO9jx-QeX_ydL6Tv9L0lQoLMhvriWFAnGoPwIw&s=10"
                  }
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            <span className="max-w-32 truncate text-sm font-medium">
              {user.name}
            </span>

            <span className="text-xs text-gray-500">⬇</span>
          </button>

          {open && (
            <>
              <button
                type="button"
                aria-label="Close menu"
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setOpen(false)}
              />

              <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-2xl border border-gray-200 bg-white p-4 text-gray-800 shadow-lg">
                <div className="border-b border-gray-100 pb-3">
                  <p className="text-sm font-semibold">{user.name}</p>

                  <p className="mt-1 break-all text-xs text-gray-500">
                    {user.email}
                  </p>
                </div>

                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center gap-2 rounded-lg px-2 py-2 text-sm hover:bg-gray-100"
                >
                  <span>👤</span>
                  আমার প্রোফাইল
                </Link>

                <button
                  type="button"
                  onClick={async () => {
                    const { error } = await authClient.signOut();

                    if (error) {
                      toast.error("সাইন আউট করা যায়নি!");
                      return;
                    }

                    toast.success("সাইন আউট সফল হয়েছে! 👋");
                    window.location.href = "/";
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-500 hover:bg-red-50"
                >
                  <span>↪</span>
                  সাইন আউট
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default UserInfo;
