import {
  SearchIcon,
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
  ArrowRightIcon,
} from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="container z-50 mx-auto flex w-full items-center justify-between bg-transparent py-8">
      <h1 className="medium font-sans text-xl font-medium">
        <Link href="/">
          GO <span className="font-bold">FOOD</span>
        </Link>
      </h1>
      <nav>
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
      <div className="flex justify-between space-x-8">
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
    </div>
  );
}

function IconButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex items-center justify-center rounded-full bg-[#4F684A] p-2 text-white">
      {children}
    </button>
  );
}
