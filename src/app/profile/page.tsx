"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const user = session?.user;

  useEffect(() => {
    if (user?.name) {
      setName(user.name);
    }
  }, [user?.name]);

  useEffect(() => {
    if (!isPending && !session) {
      window.location.href = "/login";
    }
  }, [isPending, session]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedName = name.trim();

    if (!updatedName) {
      toast.error("নাম লিখুন!");
      return;
    }

    if (updatedName === user?.name) {
      toast.error("নামে কোনো পরিবর্তন করা হয়নি!");
      return;
    }

    setIsUpdating(true);

    try {
      const { error } = await authClient.updateUser({
        name: updatedName,
      });

      if (error) {
        toast.error(error.message || "নাম আপডেট করা যায়নি!");
        return;
      }

      toast.success("প্রোফাইল আপডেট হয়েছে! 🎉");
    } catch (error) {
      console.error(error);
      toast.error("কিছু একটা সমস্যা হয়েছে!");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSignOut = async () => {
    setIsSigningOut(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error("সাইন আউট করা যায়নি!");
        return;
      }

      window.location.href = "/login";
    } catch (error) {
      console.error(error);
      toast.error("কিছু একটা সমস্যা হয়েছে!");
    } finally {
      setIsSigningOut(false);
    }
  };

  if (isPending || !session) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f0f5f1] text-sm text-gray-500">
        প্রোফাইল লোড হচ্ছে...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f0f5f1] px-4 py-10 text-[#27332c]">
      <div className="mx-auto w-full max-w-[506px]">
        
        <header className="mb-5">
          <div className="mb-3 flex h-15 w-15 items-center justify-center rounded-full bg-[#d8d8d8] text-3xl">
            <Image
              alt={"Riyad"}
              width={50}
              height={100}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHMmlZO9jx-QeX_ydL6Tv9L0lQoLMhvriWFAnGoPwIw&s=10"
              }
              className="rounded-full object-cover"
            />
          </div>

          <h1 className="text-xl font-bold">আমার প্রোফাইল</h1>

          <p className="mt-1 text-xs text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </header>

        
        <section className="mb-4 flex items-center gap-3 rounded-xl border border-[#e1e9e2] bg-[#fbfdfb] p-4">
          <div className="flex h-12 w-14 shrink-0 items-center justify-center rounded-xl bg-[#e9eeea] text-2xl">
            <Image
              alt={"Riyad"}
              width={60}
              height={100}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHMmlZO9jx-QeX_ydL6Tv9L0lQoLMhvriWFAnGoPwIw&s=10"
              }
              className=" "
            />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-sm font-semibold">
              {user?.name || "ব্যবহারকারী"}
            </h2>

            <p className="truncate text-xs text-gray-500">{user?.email}</p>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            disabled={isSigningOut}
            className="shrink-0 rounded-md border border-red-400 px-3 py-2 text-xs text-red-500 transition hover:bg-red-50 disabled:opacity-50"
          >
            {isSigningOut ? "সাইন আউট হচ্ছে..." : "↩ সাইন আউট"}
          </button>
        </section>

     
        <section className="rounded-xl border border-[#e1e9e2] bg-[#fbfdfb] p-4 sm:p-[14px]">
          <h2 className="mb-6 text-sm font-semibold">তথ্য</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="mb-1 block pl-4 text-xs">
              নাম
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mb-3 h-9 w-full rounded-md border border-[#e0e9e1] bg-transparent px-3 text-sm outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-100"
            />

            <button
              type="submit"
              disabled={isUpdating}
              className="h-9 w-full rounded-md bg-[#078b43] text-xs font-medium text-white shadow-[0_2px_2px_rgba(0,0,0,0.25)] transition hover:bg-[#067538] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isUpdating ? "আপডেট হচ্ছে..." : "আপডেট"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
