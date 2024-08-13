import React, { useState } from 'react';

const HomeTemp = () => {
  return (
    <div className="relative bg-cover bg-center h-screen border-b " style={{ backgroundImage: "url('https://cache.careers360.mobi/media/article_images/2021/12/30/FHwW1UHVUAEGehz_1.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Empowering Minds, Shaping Futures</h1>
        <p className="text-xl mb-8 max-w-2xl">
          Join us at Educare Institute of Education <br /> for a transformative learning experience.
        </p>
        <div>
          {/* <Dropdown /> */}
          <a href="/gia" className="bg-transparent border border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-6 rounded-lg m-2">
          Guidance Integrated academy
          </a>
          <a href="/gc" className="bg-transparent border border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-6 rounded-lg m-2">
          Guidance Coaching
          </a>
        </div>
      </div>
    </div>
  );
};

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative inline-block text-left ">
//       <button
//         id="dropdownDefaultButton"
//         onClick={toggleDropdown}
//         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//       >
//        Explore More
//         <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
//         </svg>
//       </button>
//       {isOpen && (
//         <div id="dropdown" className="z-10 absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 opacity-75">
//           <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
//             <li>
//               <a href="/guidance" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b">Guidance Integrated academy</a>
//             </li>
//             <button>
//               <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Guidance Coaching</a>
//             </button>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

export default HomeTemp;
