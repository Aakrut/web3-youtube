import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className="border-b-[1px] border-gray-600">
      <div className="font-body flex items-center justify-between max-w-6xl my-0 mx-auto h-16 md:px-4 ">
        <img src="/youtube.png" alt="logo" className="h-10" />
        <div>
          <ul className="flex gap-2">
            <li>
              <Link href="/dashboard">
                <a
                  className={
                    currentRoute === "/dashboard"
                      ? "text-sky-600 text-base font-medium"
                      : "text-white font-normal"
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/upload">
                <a
                  className={
                    currentRoute === "/upload"
                      ? "text-sky-600 text-base font-medium"
                      : "text-white font-normal"
                  }
                >
                  Upload
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;