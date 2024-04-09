import Image from "next/image";
import about from "../../public/images/about.jpg";

const AboutSection = (): JSX.Element => {
  return (
    <div className='relative h-screen flex items-center justify-center mt-10'>
      <Image
        src={about}
        layout='fill'
        objectFit='cover'
        quality={100}
        alt='Background'
        className='z-0'
      />
      <div className='absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
        <div className='text-center text-white px-4 lg:px-24 z-10'>
          <h1 className='text-5xl font-bold mb-6'>What were we made for?</h1>
          <p className='mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus
            vulputate eu scelerisque felis imperdiet proin fermentum. Cras
            semper auctor neque vitae tempus quam pellentesque. Elementum
            sagittis vitae et leo duis.
          </p>
          <p className='mb-8'>
            Elementum sagittis vitae et leo duis. Libero nunc consequat interdum
            varius. Habitant morbi tristique senectus et netus et malesuada
            fames ac.
          </p>
          <button className='bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded'>
            ABOUT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
