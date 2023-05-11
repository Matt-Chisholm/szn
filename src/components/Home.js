import React from "react";

function Home() {
  const restaurants = [
    {
      id: 1,
      name: "The Flying Otter Grill",
      cuisine: "Seafood",
      location: "950 Wharf St, Victoria, BC V8W 1T3",
      priceRange: "$$ - $$$",
      rating: 4.5,
      reviews: [
        "Great food and great view!",
        "The patio is amazing, definitely worth a visit.",
      ],
    },
    {
      id: 2,
      name: "10 Acres Bistro",
      cuisine: "Farm-to-table",
      location: "611 Courtney St, Victoria, BC V8W 1B7",
      priceRange: "$$$",
      rating: 4.7,
      reviews: [
        "The food is incredible!",
        "The patio is beautiful and relaxing.",
      ],
    },
    // Add more restaurants here
  ];

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl font-bold my-4 text-center'>
        Patio Restaurants in Victoria, BC
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {restaurants.map((restaurant) => (
          <div className='bg-white rounded-lg shadow-md' key={restaurant.id}>
            <img
              className='h-48 w-full object-cover rounded-t-lg'
              src='https://via.placeholder.com/350x200'
              alt={restaurant.name}
            />
            <div className='px-4 py-2'>
              <h4 className='text-lg font-bold'>{restaurant.name}</h4>
              <p className='text-gray-500'>{restaurant.cuisine}</p>
              <p className='text-gray-500'>{restaurant.location}</p>
              <p className='text-gray-500'>{restaurant.priceRange}</p>
              <div className='flex justify-between items-center mt-2'>
                <button
                  type='button'
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                  View
                </button>
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 text-yellow-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  <span className='ml-1 text-gray-500'>
                    {restaurant.rating} stars
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
