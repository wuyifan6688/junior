"use client";
import React, { useState } from "react";
import Image from "next/image";
import NavLink from "@/components/navbar/links/navLink/navLink";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
function Links({ session }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div className="mr-1">
        {links.map((link) => {
          return (
            <NavLink
              item={link}
              key={link.title}
            ></NavLink>
          );
        })}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink
                item={{
                  title: "Admin",
                  path: "/admin",
                }}
              />
            )}{" "}
          </>
        ) : (
          <NavLink
            item={{
              title: "Login",
              path: "/login",
            }}
          />
        )}
      </div>

      <Image
        alt=""
        src="/menu.png"
        width={30}
        height={30}
        onClick={(prev) => setOpen(!prev)}
      ></Image>
    </div>
  );
}

export default Links;
