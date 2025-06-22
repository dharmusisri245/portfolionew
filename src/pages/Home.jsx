// import React from "react";
// import Layout from "../Compnents/Layout";

// const Home = () => {
//   return (
//     <>
//       <Layout>
//         <div className="relative w-full h-139 overflow-hidden">
//           {/* Background Video */}
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="absolute w-full h-full object-cover z-0"
//           >
//             <source src="/7989671-hd_1920_1080_25fps.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           <div className="flex  justify-between flex-col md:flex-row relative mt-10 ml-4 md:ml-10 items-center ">
//             {/* About Box */}
//             <div className="flex flex-col border-2 p-5 bg-blue-200 justify-center items-center h-auto w-[250px] rounded-3xl mt-30">
//               <div className="p-2 font-bold text-white text-4xl">About</div>
//               <div className="mb-2 text-cyan-800 text-2xl">
//                 Dharmendra Gupta
//               </div>
//               <div className="text-xl text-center">
//                 MERN Full Stack Developer
//               </div>
//             </div>

//             {/* Image Section */}
//             <div className="flex justify-center md:justify-end h-auto   ">
//               <img
//                 className="w-60 h-60 object-cover rounded-full border-4 border-white shadow-lg m-5"
//                 src="/dharmendra2.jpeg"
//                 alt="Dharmendra"
//               />
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// };

// export default Home;

import React from "react";
import Layout from "../Compnents/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="relative w-full min-h-screen overflow-hidden ">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/7989671-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 py-10 md:py-24">
          {/* About Box */}
          <div className="flex flex-col border-2 p-5 bg-blue-200/90 justify-center items-center w-full max-w-xs md:max-w-sm rounded-3xl shadow-lg mb-8 md:mb-0 md:mr-10">
            <div className="p-2 font-bold text-white text-3xl md:text-4xl">
              About
            </div>
            <div className="mb-2 text-cyan-800 text-xl md:text-2xl">
              Dharmendra Gupta
            </div>
            <div className="text-lg md:text-xl text-center">
              MERN Full Stack Developer
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center mb-8 md:mb-0">
            <img
              className="w-35 h-35 md:w-48 md:h-48 lg:w-70 lg:h-70 object-cover rounded-full border-4 border-white shadow-lg"
              src="/dharmendra2.jpeg"
              alt="Dharmendra"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
