import { categories as categoriesType } from "@/types/categories.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// images
import necklaces from "@/public/images/necklaces.jpg";

const categories: categoriesType[] = [
  { name: "Necklaces", image: "/images/necklaces.jpg", path: "/necklaces" },
  { name: "Earrings", image: "/images/earrings.jpg", path: "/earrings" },
  { name: "Bracelets", image: "/images/bracelets.jpg", path: "/bracelets" },
  { name: "Rings", image: "/images/rings.jpg", path: "/rings" },
  { name: "Charms", image: "/images/charms.jpg", path: "/charms" },
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
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8'>
          {categories.map((category) => (
            <div key={category.name} className='group relative'>
              <Image
                src={necklaces}
                alt={category.name}
                layout='responsive' // Changed from 'fill' to 'responsive'
                objectFit='cover'
                width={500} // Set a specific width
                height={400} // Set a specific height
                className='w-full h-full object-center lg:w-full lg:h-full'
              />
              <div className='mt-6 flex justify-center'>
                <h3 className='text-sm text-gray-700'>
                  <Link href='#'>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {category.name}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
