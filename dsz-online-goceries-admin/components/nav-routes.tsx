"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavRoutes = () => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Products",
        href: "/products",
        active: pathName === "/products",
      },
      {
        label: "Categories",
        href: "/categories",
        active: pathName === "/categories",
      },
    ],
    [pathName]
  );
  return (
    <div className="flex gap-x-4">
      {routes.map((route) => (
        <Link
          href={route.href}
          className={`flex items-center p-2 rounded-sm ${
            route.active ? "bg-orange-500 text-white" : ""
          } hover:text-white hover:bg-orange-500`}
        >
          <p>{route.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default NavRoutes;
