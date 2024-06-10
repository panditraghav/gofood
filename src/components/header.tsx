"use client";
import { cn } from "@/lib/utils";
import {
  SearchIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
  XIcon,
  MenuIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="container relative z-50 mx-auto flex items-center justify-between overflow-x-clip bg-my-bg-cream px-3 py-8 md:w-full md:bg-transparent md:px-0">
      <h1 className="medium font-sans text-xl font-medium">
        <Link href="/">
          GO <span className="font-bold">FOOD</span>
        </Link>
      </h1>
      <nav className="hidden md:block">
        <ul className="flex space-x-8 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/groceries">Groceries</Link>
          </li>
          <li>
            <Link href="/pages">Pages</Link>
          </li>
        </ul>
      </nav>
      <div className="hidden justify-between space-x-8 md:flex">
        <button className="flex items-center space-x-1 font-medium text-white">
          <span>Connect with us</span> <ArrowRightIcon size={16} />
        </button>
        <div className="flex space-x-3">
          <IconButton>
            <SearchIcon size={18} className="" />
          </IconButton>
          <IconButton>
            <UserIcon size={18} className="" />
          </IconButton>
          <IconButton>
            <HeartIcon size={18} className="" />
          </IconButton>
          <IconButton>
            <ShoppingBagIcon size={18} className="" />
          </IconButton>
        </div>
      </div>
      <button className="md:hidden" onClick={() => setNavOpen(true)}>
        <MenuIcon />
      </button>
      <MobileNavbar
        open={navOpen}
        onClose={() => {
          setNavOpen(false);
        }}
      />
    </div>
  );
}

function IconButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-full bg-[#4F684A] p-2 text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}

function MobileNavbar({
  open,
  onClose,
}: {
  open?: boolean;
  onClose: () => void;
}) {
  return (
    <nav
      data-open={open}
      className="absolute right-0 top-0 z-50 h-screen w-[60%] translate-x-full bg-my-bg-cream px-8 py-8 transition duration-300 data-[open='true']:translate-x-0 data-[open='true']:slide-in-from-left md:hidden"
    >
      <div className="flex justify-end">
        <button onClick={onClose}>
          <XIcon />
        </button>
      </div>
      <div className="my-4 flex gap-x-2">
        <IconButton className="bg-transparent text-primary-foreground-800">
          <SearchIcon size={20} className="" />
        </IconButton>
        <IconButton className="bg-transparent text-primary-foreground-800">
          <UserIcon size={20} className="" />
        </IconButton>
        <IconButton className="bg-transparent text-primary-foreground-800">
          <HeartIcon size={20} className="" />
        </IconButton>
        <IconButton className="bg-transparent text-primary-foreground-800">
          <ShoppingBagIcon size={20} className="" />
        </IconButton>
      </div>
      <ul className="space-y-8 font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/groceries">Groceries</Link>
        </li>
        <li>
          <Link href="/pages">Pages</Link>
        </li>
      </ul>
    </nav>
  );
}
