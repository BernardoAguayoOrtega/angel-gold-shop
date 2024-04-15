import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer(): JSX.Element {
  return (
    <footer className='bg-gray-100 text-gray-600 body-font'>
      <div className='container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <span className='ml-3 text-xl'>APOLLONIAN, LLC</span>
          </a>
          <p className='mt-2 text-sm text-gray-500'>
            Providing excellent services since [Year]
          </p>
        </div>
        <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
              CUSTOMER SERVICES
            </h2>
            <nav className='list-none mb-10'>
              <li>
                <a
                  href='#contact'
                  className='text-gray-600 hover:text-gray-800'>
                  Contact Us
                </a>
              </li>
              {/* Repeat for other items */}
            </nav>
          </div>
          {/* Repeat for other columns like ABOUT US, MATERIAL CARE, MAIN LOCATIONS */}
        </div>
      </div>
      <div className='bg-gray-50'>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
          <p className='text-gray-500 text-sm text-center sm:text-left'>
            © 2024 APOLLONIAN, LLC —
            <a
              href='https://twitter.com/knyttneve'
              rel='noopener noreferrer'
              className='text-gray-600 ml-1'
              target='_blank'>
              @knyttneve
            </a>
          </p>
                  <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
                      <span className='text-gray-500'>
                          <FaFacebook />
                      </span>
                      <span className='ml-3 text-gray-500'><FaInstagram/></span>
          </span>
        </div>
      </div>
    </footer>
  );
}
