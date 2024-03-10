"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function NavLink({ item }: any) {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className="mx-2 text-2xl font-medium"
    >
      {item.title}
    </Link>
  );
}

export default NavLink;
