import React from "react";
import Link from "next/link";

function NotFound(props: any) {
  return (
    <>
      <div className="text-center text-2xl">
        not found
      </div>
      <Link
        rel="stylesheet"
        href="/"
        className="text-center text-2xl mt-0"
      >
        Return Home
      </Link>
    </>
  );
}

export default NotFound;
