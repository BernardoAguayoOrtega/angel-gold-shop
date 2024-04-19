const products = [
  { name: "CHAINED CUFF", price: 200.0 },
  { name: "THIN CHAIN", price: 90.0 },
  { name: "LEAFY CHAIN", price: 60.0 },
  { name: "FLORA CHAIN", price: 40.0 },
  { name: "ARROW CUFF", price: 50.0 },
];

interface props {
  params: Params;
}

interface Params {
  type: string;
}

export default function CategoryPage({ params: { type } }: props): JSX.Element {
  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-4xl font-semibold text-center mb-8'>{type}</h1>
      <p className='text-center text-gray-600 mb-12'>
        Lorem ipsum dolor sit amet.
      </p>
      <div className='flex justify-between mb-4'>
        <div>SORT BY:</div>
        <button className='text-gray-600 hover:text-gray-900'>
          Popularity
        </button>
        <button className='text-gray-600 hover:text-gray-900'>Type</button>
        <button className='text-gray-600 hover:text-gray-900'>Gemstone</button>
        <button className='text-gray-600 hover:text-gray-900'>Price</button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {products.map((product) => (
          <div
            className='border p-4 flex flex-col items-center'
            key={product.name}>
            <div className='w-32 h-32 bg-gray-200 mb-4'></div>
            <div className='text-lg font-medium'>{product.name}</div>
            <div className='text-lg'>${product.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
