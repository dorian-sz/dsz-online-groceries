"use client";

import { useEffect, useMemo } from "react";
import { Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Cart from "@/components/cart";
import Logo from "@/components/logo";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { hideLoading } from "@/redux/slices/cart-slice";

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideLoading());
  }, [dispatch]);

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
  const login = [
    {
      ukey: "login",
      label: "Log in / Register",
      href: "/sign-in",
    },
  ];
  const navItems = useMemo(
    () => [
      {
        label: "Groceries",
        href: "/",
        active: pathName === "/",
        disabled: true,
      },
      {
        label: "Favourites",
        href: "/under-development",
        disabled: true,
      },
      {
        label: "Nectar",
        href: "/under-development",
        disabled: true,
      },
      {
        label: "Offers",
        href: "/offers",
        active: pathName === "/offers",
        disabled: false,
      },
      {
        label: "Discover",
        href: "/under-development",
        disabled: true,
      },
      {
        label: "Recipes",
        href: "/under-development",
        disabled: true,
      },
      {
        label: "Delivery Pass",
        href: "/under-development",
        disabled: true,
      },
      {
        label: "Occasions",
        href: "/under-development",
        disabled: true,
      },
      {
        label: "Summer",
        href: "/under-development",
        disabled: true,
      },
    ],
    [pathName]
  );
  return (
    <div className="flex flex-col mx-auto h-full w-full p-4 md:pt-2 md:p-0 md:w-3/4 gap-y-4">
      <div className="hidden gap-x-6 items-center md:w-full md:flex">
        <div className="flex w-full justify-between">
          <div className="space-x-4 text-xs font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.ukey}
                href={link.href}
                className="underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
          {login.map((link) => (
            <Link
              key={link.ukey}
              href={link.href}
              className="text-sm font-extrabold underline-offset-4 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-x-4">
          <Cart />
        </div>
      </div>
      <div className="flex gap-x-4 items-center">
        <div className="hidden md:flex">
          <Logo width={150} height={100} />
        </div>
        <div className="flex md:hidden">
          <Menu />
        </div>
        <div className="flex md:hidden">
          <Logo width={100} height={100} />
        </div>
      </div>
      <div className="flex w-full relative items-center">
        <Input
          id="search-bar"
          name="search-bar"
          className="border placeholder:text-gray-400 py-4 md:py-6"
          placeholder="Search products"
        />
        <Label
          htmlFor="search-bar"
          className="absolute flex items-center right-0 gap-x-2"
        >
          <Link
            href={"/search-a-list-of-items"}
            className="hidden md:flex text-gray-500 font-light underline-offset-2 hover:underline"
          >
            Search a list of items
          </Link>
          <Button
            variant={"ghost"}
            type="submit"
            className="hover:bg-transparent"
          >
            <Search />
          </Button>
        </Label>
      </div>
      <div className="hidden md:flex gap-x-8 h-full">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={cn(
              "border-b-4 hover:border-orange-500 self-end py-2",
              item.active ? "border-orange-500" : "border-transparent"
            )}
          >
            <Link
              key={item.label}
              href={item.href}
              className={item.disabled ? `pointer-events-none` : ``}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
