import { categories as categoriesType } from "@/types/categories.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// images
import necklaces from "@/public/images/necklaces.jpg";
import bracelets from "@/public/images/bracelets.jpg";
import charms from "@/public/images/charms.jpg";
import earrings from "@/public/images/earrings.jpg";
import rings from "@/public/images/rings.jpg";

const categories: categoriesType[] = [
  { name: "Necklaces", image: necklaces, path: "/category/necklaces" },
  { name: "Earrings", image: earrings, path: "/category/earrings" },
  { name: "Bracelets", image: bracelets, path: "/category/bracelets" },
  { name: "Rings", image: rings, path: "/category/rings" },
  { name: "Charms", image: charms, path: "/category/charms" },
];

const CategoriesSection: React.FC = (): JSX.Element => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className='justify-center flex-col items-center flex'>
          <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
            Shop by category
          </h2>
          <p className='mt-2 text-sm text-gray-500'>
            Indulge in what we offer.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12'>
          {categories.map((category) => (
            <div key={category.name} className='group'>
              <Link href={category.path}>
                <span className='block relative h-64 md:h-80 xl:h-96 rounded overflow-hidden p-4'>
                  {" "}
                  {/* Added p-4 for padding */}
                  <Image
                    src={category.image}
                    layout='fill'
                    objectFit='cover'
                    alt={category.name}
                    className='transition duration-300 ease-in-out transform group-hover:scale-105'
                  />
                </span>
              </Link>
              <div className='mt-4 text-center'>
                <h3 className='text-xl font-medium'>{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
