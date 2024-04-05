import Image from "next/image";
import gift from "../../public/images/gift.jpg";

const GiftSection = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left block with background color */}
      <div className="lg:flex-1 flex flex-col justify-center bg-gray-100 p-8">
        <h2 className="text-4xl font-bold mb-4">Gifts of the season</h2>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-opacity-90 transition duration-300">
          SHOP GIFTS
        </button>
      </div>
      {/* Right block with image */}
      <div className="lg:flex-1">
        {/* Adjust the height class here; 28rem or 30rem for a moderate increase */}
        <div className="w-full h-[28rem] lg:h-[30rem] relative">
          <Image
            src={gift} // Replace with the path to your image
            layout="fill"
            objectFit="cover"
            alt="Jewelry"
            className="object-right" // Adjust this if you want to control the positioning of the image within its container
          />
        </div>
      </div>
    </div>
  );
};

export default GiftSection;


