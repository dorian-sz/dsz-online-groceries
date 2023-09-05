"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import NavLink from "@/components/nav-link";
import Logo from "./logo";

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
        label: "Products",
        active: pathName === "/products",
        href: "/products",
      },
    ],
    [pathName]
  );

  return (
    <nav className="flex items-end w-full h-20 bg-white ">
      <div className="flex w-1/2 mx-auto justify-between">
        <div>
          <Logo width={140} height={100} />
        </div>
        <div className="flex gap-x-8">
          {routes.map((props) => (
            <NavLink key={props.label} {...props} />
          ))}
        </div>
        <div>Logout</div>
      </div>
    </nav>
  );
};

export default Navbar;
