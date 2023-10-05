"use client";
import { useAuth, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export const NavbarRoutes = () => {
  const { userId } = useAuth();
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <div className="flex gap-x-2 ml-auto">
      <UserButton />
    </div>
  );
};
