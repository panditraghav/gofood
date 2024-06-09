"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const categories: Array<{ name: string; apiCategory: string }> = [
  { name: "Fruits And Vegetables", apiCategory: "Vegetarian" },
  { name: "Bakery", apiCategory: "Dessert" },
  { name: "Meat and Seafood", apiCategory: "Seafood" },
  { name: "Beverage", apiCategory: "Starter" },
  { name: "Biscuit and Snaks", apiCategory: "Starter" },
];

type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export default function CategoryList() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState<Array<Meal>>([]);

  useEffect(() => {
    async function fetchMeals() {
      setMeals([]);
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories[selectedCategory].apiCategory}`,
        );
        if (!res.ok) throw new Error("Unable to fetch meals");
        const resJson = (await res.json()) as { meals: Array<Meal> };
        setMeals(resJson.meals.slice(0, 6));
      } catch (error) {
        setMeals([]);
      }
      setLoading(false);
    }
    fetchMeals();
  }, [selectedCategory]);
  return (
    <div className="space-y-8 text-primary-foreground-800">
      <div className="flex w-full flex-wrap justify-between gap-4 md:gap-6">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory(index);
              }}
              className={cn(
                "rounded-3xl bg-my-bg-cream px-8 py-4 text-sm font-medium uppercase transition-all duration-300",
                selectedCategory == index && "bg-my-bg-green text-white",
              )}
            >
              {category.name}
            </button>
          );
        })}
      </div>
      {loading ? (
        <MealLoadingSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
          {meals.map((meal) => {
            return <MealItem meal={meal} key={meal.idMeal} />;
          })}
        </div>
      )}
    </div>
  );
}
function MealLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
      {new Array(6).fill(0).map((_, index) => {
        return (
          <div
            className="h-[60px] w-full animate-pulse rounded-md bg-gray-100"
            key={index}
          />
        );
      })}
    </div>
  );
}

function MealItem({ meal }: { meal: Meal }) {
  return (
    <div className="flex space-x-4">
      <img
        width={64}
        height={64}
        className="rounded-full"
        src={meal.strMealThumb + "/preview"}
        alt={meal.strMeal}
      />
      <div className="w-full space-y-2">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="font-serif text-xl font-semibold">
            {meal.strMeal}
          </Link>
          <div className="font-serif text-xl font-semibold text-secondary-foreground-800">
            $8.45
          </div>
        </div>
        <div className="w-full border-t-2 border-dashed" />
        <div className="flex w-full justify-between">
          <div className="text-xs font-medium text-primary-foreground-100">
            Lorem ipsum dolor sit.
          </div>
          <Link href="/" className="flex text-secondary-foreground-800">
            <span className="text-xs font-medium uppercase">Shop Now</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
