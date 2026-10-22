"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const SignInPage = () => {
  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
      toast.error("ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে!");
      return;
    }

    if (data) {
      toast.success("সাইন ইন সফল হয়েছে! 🎉");
      router.push("/");
    }
  };

  const handleGoogleSignin = async () => {
  const { data, error } = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });

  if (error) {
    toast.error(error.message || "Google Sign up failed!");
    console.log(error);
    return;
  }

  toast.success("Google দিয়ে সাইন আপ সফল হয়েছে! 🎉");
  console.log(data);
};

const handleGithubSignin = async () => {
  const { data, error } = await authClient.signIn.social({
    provider: "github",
    callbackURL: "/",
  });

  if (error) {
    toast.error(error.message || "GitHub Sign up failed!");
    console.log(error);
    return;
  }

  toast.success("GitHub দিয়ে সাইন আপ সফল হয়েছে! 🎉");
  console.log(data);
};
  return (
    <div>
      <main className="min-h-screen bg-green-50 px-4 py-5 text-gray-800">
        <div className="mx-auto w-full max-w-[386px]">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight">সাইন ইন</h1>

            <p className="mt-1 text-sm text-gray-500">
              বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-[22px]">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium"
                >
                  ইমেইল
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="h-[38px] w-full rounded-lg border border-gray-200 bg-transparent px-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium"
                >
                  পাসওয়ার্ড
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="তোমার পাসওয়ার্ড"
                  required
                  className="h-9 w-full rounded-lg border border-gray-200 bg-transparent px-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <button
                type="submit"
                className="h-[39px] w-full rounded-lg bg-green-700 text-sm font-semibold text-white shadow-md transition hover:bg-green-800 active:scale-[0.99]"
              >
                সাইন ইন করুন
              </button>
            </form>

            <div className="my-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-500">অথবা</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex h-[38px] w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-gray-200 text-xs font-semibold transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm"
              >
                <span className="text-base font-bold text-blue-500">G</span>
                Google দিয়ে চালিয়ে যান
              </button>

              <button
                onClick={handleGithubSignin}
                type="button"
                className="flex h-[38px] items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-gray-200 text-xs font-semibold transition hover:bg-gray-100 sm:text-sm"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.75 2.2 3.23 1.57.1-.72.4-1.21.7-1.49-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.16 3.08-1.16.62 1.55.23 2.7.12 2.98.72.79 1.15 1.8 1.15 3.03 0 4.33-2.63 5.28-5.14 5.56.41.35.77 1.02.77 2.06v3.07c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />
                </svg>
                GitHub দিয়ে চালিয়ে যান
              </button>
            </div>

            <p className="mt-4 text-center text-xs">
              অ্যাকাউন্ট নেই?{" "}
              <Link
                href="/signup"
                className="font-medium text-green-700 hover:underline"
              >
                সাইন আপ করুন
              </Link>
            </p>
          </div>

          <div className="mt-5 text-center">
            <Link
              href="/"
              className="text-xs text-gray-500 transition hover:text-green-700"
            >
              ← হোম পেজে ফিরে যান
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
