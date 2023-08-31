"use client";

import { useMemo } from "react";
import { SignOutButton, UserButton, useAuth } from "@clerk/nextjs";
import { Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cart from "@/components/cart";
import Logo from "./logo";

const Navbar = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const pathName = usePathname();
  const navLinks = [
    {
      ukey: "explore",
      label: "Explore more at Sainsburys.co.uk",
      href: "/under-development",
    },
    {
      ukey: "help",
      label: "Help Centre",
      href: "/under-development",
    },
    {
      ukey: "locator",
      label: "Store Locator",
      href: "/under-development",
    },
  ];

  const navItems = useMemo(
    () => [
      {
        label: "Groceries",
        href: "/",
        active: pathName === "/",
      },
      {
        label: "Favourites",
        href: "/under-development",
      },
      {
        label: "Nectar",
        href: "/under-development",
      },
      {
        label: "Offers",
        href: "/offers",
        active: pathName === "/offers",
      },
      {
        label: "Discover",
        href: "/under-development",
      },
      {
        label: "Recipes",
        href: "/under-development",
      },
      {
        label: "Delivery Pass",
        href: "/under-development",
      },
      {
        label: "Occasions",
        href: "/under-development",
      },
      {
        label: "Summer",
        href: "/under-development",
      },
    ],
    [pathName]
  );
  return (
    <div className="flex flex-col mx-auto p-2 w-full md:pt-2 md:w-3/5 md:gap-y-4">
      <div className="flex justify-between md:hidden">
        <div className="flex">
          <Button variant={"ghost"} size={"icon"}>
            <Menu />
          </Button>
          <div className="flex items-center">
            <Logo width={110} height={45} />
          </div>
        </div>
        <Cart />
      </div>
      <div className="flex ml-auto md:ml-0">
        <div className="hidden md:flex items-center w-full">
          <div className="hidden gap-x-6 md:flex ">
            {navLinks.map((link) => (
              <Link key={link.ukey} href={link.href}>
                <p className="text-xs hover:underline">{link.label}</p>
              </Link>
            ))}
          </div>
          <div className="ml-auto">
            {!userId ? (
              <div className="mr-4">
                <Link href={"/sign-in"}>
                  <p className="text-sm font-bold hover:underline">
                    Log in / Register
                  </p>
                </Link>
              </div>
            ) : (
              <div className="mr-8">
                <SignOutButton>
                  <p className="text-sm cursor-pointer hover:underline">
                    Logout
                  </p>
                </SignOutButton>
              </div>
            )}
          </div>
        </div>
        <div className="hidden justify-center items-center md:flex">
          <Cart />
        </div>
      </div>
      <div className="hidden justify-between items-center md:flex">
        <Logo width={140} height={100} />
        <Link href={"/under-development"}>
          <p className="text-xs underline">Search a list of items</p>
        </Link>
      </div>
      <div className="flex w-full items-center">
        <input
          className="border border-neutral-700 border-r-0 w-full p-2 focus:border-orange-600"
          type="search"
          placeholder="Search products"
        />
        <Button>
          <Search />
        </Button>
      </div>
      <div className="hidden gap-x-6 md:flex">
        {navItems.map((items) => (
          <div
            key={items.label}
            className={`h-full border-b-4 ${
              items.active ? "border-orange-600" : "border-transparent"
            } hover:border-orange-600`}
          >
            <Link href={items.href}>
              <p className="">{items.label}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
