import React from "react";
import Link from "next/link";
import Links from "@/components/navbar/links/links";

function Navbar(props: any) {
  const session = null;
  return (
    <div className="h-20 flex mx-5 justify-between my-2">
      <Link
        href="/"
        className="text-3xl font-bold"
      >
        logo
      </Link>
      <div>
        <Links session={session}></Links>
      </div>
    </div>
  );
}

export default Navbar;
