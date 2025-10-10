const FloatingButtons = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
      {/* زر الواتساب */}
      <a 
        href="https://wa.me/201044839343"
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-float group"
        title="تواصل عبر واتساب"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
        <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          01044839343
        </span>
      </a>

      {/* زر الهاتف */}
      <a 
        href="tel:01044839343"
        className="relative bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-float group"
        title="اتصل بنا"
        style={{ animationDelay: '0.5s' }}
      >
        <i className="fas fa-phone text-2xl"></i>
        <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          01044839343
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;








// const FloatingButtons = () => {
//   return (
//     <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-4">
//       <a 
//         href="https://wa.me/201115536294"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-float group"
//         title="تواصل عبر واتساب"
//       >
//         <i className="fab fa-whatsapp text-2xl"></i>
//         <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           01115536294
//         </span>
//       </a>
      
//       <a 
//         href="tel:01115536294"
//         className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-float group"
//         style={{animationDelay: '1s'}}
//         title="اتصل بنا"
//       >
//         <i className="fas fa-phone text-2xl"></i>
//         <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           01115536294
//         </span>
//       </a>
      
//       <a 
//         href="tel:01015501710"
//         className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-float group"
//         style={{animationDelay: '2s'}}
//         title="الهاتف الثاني"
//       >
//         <i className="fas fa-phone text-2xl"></i>
//         <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           01015501710
//         </span>
//       </a>
//     </div>
//   );
// };

// export default FloatingButtons;
