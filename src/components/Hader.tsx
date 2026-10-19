import Image from "next/image";
import { connection } from "next/server";
import React from "react";
import UserInfo from "./UserInfo";
import NavLink from "./NavLink";

const Hader = async () => {
  await connection();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="w-full bg-white">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between bg-white px-4 py-4">
          {/* Logo and Website Name */}
          <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
            <Image
              src="/logo-icon.png"
              alt="বাজার দর"
              className="rounded bg-amber-200"
              width={40}
              height={40}
              priority
            />

            <div className="flex flex-col items-center sm:items-start">
              <span className="text-2xl font-bold text-red-700">বাজার দর</span>

              <span className="text-xs text-neutral-500">{date}</span>
            </div>
          </div>

          {/* Sign In, Sign Up and Bazar Jat */}
          <div className="flex items-center gap-2 sm:gap-4">
            <UserInfo />
          </div>
        </div>
      </div>
      <NavLink />
      
    </header>
  );
};

export default Hader;
