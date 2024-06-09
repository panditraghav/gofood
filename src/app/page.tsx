import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import { ArrowRightIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-primary-foreground-800">
      <Header />
      <div className="absolute top-0 -z-10 hidden h-[600px] w-full grid-cols-10 md:grid">
        <div className="col-span-6 bg-my-bg-cream"></div>
        <div className="col-span-4 bg-my-bg-green"></div>
      </div>
      <HeroSection />
      <section className="container mx-auto my-12 space-y-8 px-3 md:px-0">
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
    <section className="container mx-auto grid-cols-10 bg-my-bg-cream px-3 pb-8 pt-2 md:grid md:h-[500px] md:bg-transparent md:px-0 md:py-0">
      <div className="flex flex-col justify-center space-y-3 md:col-span-6 md:mr-28">
        <h3 className="font-bold md:text-lg">Discount up to 20%</h3>
        <h1 className="w-full font-serif text-4xl font-medium md:text-5xl">
          Buy Fresh And Organic Grocery Food
        </h1>
        <p className="text-sm font-medium text-[#DDD8D2] md:text-base">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          ex esse exercitation amet.
        </p>
        <div className="flex flex-col-reverse justify-between md:flex-row md:items-center md:py-4">
          <button className="flex h-14 items-center rounded-3xl bg-my-bg-green px-8 uppercase text-white">
            <span className="mr-2 font-medium">Shop Now</span>
            <ArrowRightIcon size={18} />
          </button>
          <div className="my-4 flex space-x-4 md:space-x-12">
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
      <div className="hidden md:col-span-4 md:block">
        <div className="relative -ml-28 aspect-square h-[500px]">
          <Image src="/salad-plate.png" alt="Salad Plate" fill />
        </div>
      </div>
    </section>
  );
}
