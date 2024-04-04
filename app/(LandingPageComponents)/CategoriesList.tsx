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
  { name: "Necklaces", image: necklaces, path: "/necklaces" },
  { name: "Earrings", image: earrings, path: "/earrings" },
  { name: "Bracelets", image: bracelets, path: "/bracelets" },
  { name: "Rings", image: rings, path: "/rings" },
  { name: "Charms", image: charms, path: "/charms" },
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
  <div key={category.name} className="group relative">
    {/* Image container with shadow */}
    <div className="w-full h-80 bg-gray-200 rounded-md overflow-hidden shadow-lg"> {/* Added shadow */}
      <Image
        src={category.image}
        alt={category.name}
        layout="fill" // Changed to 'fill' to ensure image covers the container
        objectFit="cover" // Ensures image covers the div and retains aspect ratio
        className="w-full h-full object-center"
      />
    </div>
    {/* Text container */}
    <div className="mt-4 text-center relative top-10">
      <h3 className="text-sm text-gray-700">
        <Link href="#">
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
