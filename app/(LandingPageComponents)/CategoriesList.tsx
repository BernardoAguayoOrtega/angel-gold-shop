import { categories as categoriesType } from "@/types/categories.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// images
import necklaces from "@/public/images/necklaces.jpg";

const categories: categoriesType[] = [
  { name: "Necklaces", image: "/images/necklaces.jpg", path: "/necklaces"},
  { name: "Earrings", image: "/images/earrings.jpg", path: "/earrings"},
  { name: "Bracelets", image: "/images/bracelets.jpg", path: "/bracelets"},
  { name: "Rings", image: "/images/rings.jpg", path: "/rings"},
  { name: "Charms", image: "/images/charms.jpg", path: "/charms"},
];

const CategoriesSection: React.FC = (): JSX.Element => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className="justify-center flex-col items-center">
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
              <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
                <Image
                  src={necklaces}
                  alt={category.name}
                  layout='fill'
                  objectFit='cover'
                  className='w-full h-full object-center object-cover lg:w-full lg:h-full'
                />
              </div>
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
