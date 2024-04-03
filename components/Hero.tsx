const HeroSection = () => {
  return (
    <div className='relative bg-black text-white'>
      {/* Overlay if needed */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      {/* Hero Content */}
      <div className='container mx-auto px-4 py-20 relative z-10 flex flex-col items-start justify-center h-screen'>
        {/* Subtitle */}
        <p className='text-sm uppercase tracking-widest mb-2'>
          Fall has arrived.
        </p>

        {/* Title */}
        <h1 className='font-serif text-6xl font-bold leading-none mb-4'>
          The autumn <br /> equinox
        </h1>

        {/* Description */}
        <p className='mb-8 max-w-md'>
          Shop for our new releases starting today
        </p>

        {/* Call to action */}
        <button className='bg-transparent border border-white text-white py-2 px-6 hover:bg-white hover:text-black transition ease-in-out duration-300'>
          Shop Now
        </button>
      </div>

      {/* Background Image */}
      <img
        src='https://img.freepik.com/free-photo/expensive-golden-ring-displayed-rocks_23-2150347044.jpg?t=st=1712111317~exp=1712114917~hmac=3c00b5f2473e55d72d5ee0ef32a5122e8fb6d90e5da1d0683e935cb30f73f9ec&w=1380'
        alt='Hero Background'
        className='absolute inset-0 w-full h-full object-cover object-center'
      />
    </div>
  );
};

export default HeroSection;
