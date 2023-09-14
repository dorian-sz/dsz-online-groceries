"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

import NavLink from "@/components/nav-link";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathName = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Categories",
        active: pathName === "/categories",
        href: "/categories",
      },
      {
        label: "Subcategories",
        active: pathName === "/subcategories",
        href: "/subcategories",
      },
      {
        label: "Products",
        active: pathName === "/products",
        href: "/products",
      },
    ],
    [pathName]
  );

  return (
    <nav className="flex items-end w-full h-20 bg-white ">
      <div className="flex justify-between w-1/2 mx-auto h-full">
        <div className="flex items-center h-full">
          <Link href={"/"}>
            <Logo width={140} height={100} />
          </Link>
        </div>
        <div className="flex items-end gap-x-8 h-full">
          {routes.map((props) => (
            <NavLink key={props.label} {...props} />
          ))}
        </div>
        <div className="flex items-center h-full">
          <SignOutButton>
            <Button>Logout</Button>
          </SignOutButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
