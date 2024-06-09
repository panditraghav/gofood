import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import { ArrowRightIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-primary-foreground-800">
      <Header />
      <div className="absolute top-0 -z-10 grid h-[600px] w-full grid-cols-10">
        <div className="col-span-6 bg-my-bg-cream"></div>
        <div className="col-span-4 bg-my-bg-green"></div>
      </div>
      <HeroSection />
      <section className="container mx-auto my-12 space-y-8">
        <div className="space-y-2 text-center font-semibold text-primary-foreground-800">
          <h4>Shop by Category</h4>
          <h3 className="font-serif text-4xl">Top Category Of Organic Food</h3>
        </div>
        <CategoryList />
      </section>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="container mx-auto grid h-[500px] grid-cols-10">
      <div className="col-span-6 mr-28 flex flex-col justify-center space-y-3">
        <h3 className="text-lg font-bold">Discount up to 20%</h3>
        <h1 className="font-serif text-5xl font-medium">
          Buy Fresh And Organic Grocery Food
        </h1>
        <p className="font-medium text-[#DDD8D2]">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          ex esse exercitation amet.
        </p>
        <div className="flex w-full justify-between py-4">
          <button className="flex items-center rounded-3xl bg-my-bg-green px-6 py-2 uppercase text-white">
            <span className="mr-2 font-medium">Shop Now</span>
            <ArrowRightIcon size={18} />
          </button>
          <div className="flex space-x-12">
            <div>
              <div className="flex items-center font-serif text-2xl font-bold">
                <span className="mr-1">35K</span>
                <PlusIcon />
              </div>
              <span className="font-serif text-sm font-medium text-primary-foreground-100">
                Users
              </span>
            </div>
            <div className="h-full w-[1px] bg-gray-200"></div>
            <div>
              <div className="flex items-center font-serif text-2xl font-bold">
                <span className="mr-1">18K</span>
                <PlusIcon />
              </div>
              <span className="font-serif text-sm font-medium text-primary-foreground-100">
                Products
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <div className="relative -ml-28 aspect-square h-[500px]">
          <Image src="/salad-plate.png" alt="Salad Plate" fill />
        </div>
      </div>
    </section>
  );
}
