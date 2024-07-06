import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import comp2 from "../../Assets/comp2.jpg";
const Gallery = () => {
  return (
    <>
    <div className="flex flex-col bg-black w-full h-full">
    <Navbar />

      <div className="bg-black flex  w-full  h-full">
        <div className="w-1/2 h-full bg-gray-700 flex flex-wrap justify-center  gap-2 p-5">
        <img
                src={`https://inovation.up.railway.app/uploads/1720032386617-charT.png`}
                className="m-2 w-40 h-40 object-cover rounded-xl"
              />
          <img
            className="rounded-xl border border-yellow-300 "
            src={comp2}
            alt=""
          />
          <img
            className="rounded-xl border border-yellow-300 "
            src={comp2}
            alt=""
          />
          <img
            className="rounded-xl border border-yellow-300 "
            src={comp2}
            alt=""
          />
          <img
            className="rounded-xl border border-yellow-300 "
            src={comp2}
            alt=""
          />
          <img
            className="rounded-xl border border-yellow-300 "
            src={comp2}
            alt=""
          />
          <img
            className="rounded-xl border border-yellow-300 "
            src={comp2}
            alt=""
          />
          <img
            className="rounded-xl border border-yellow-300 "
            src={comp2}
            alt=""
          />
          <img
            className="rounded-xl border border-yellow-300 "
            src={comp2}
            alt=""
          />
          <img
            className="rounded-xl border border-yellow-300 "
            src={comp2}
            alt=""
          />
          <img
            className="rounded-xl border border-yellow-300 "
            src={comp2}
            alt=""
          />
          <img
            className="rounded-xl border border-yellow-300 "
            src={comp2}
            alt=""
          />
        </div>
        <div className="w-1/2 ">
          <iframe
          className="w-full h-full "
            src="https://www.youtube.com/embed/Q9T2BvkzVXk"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
      </div>

    </>
  );
};

export default Gallery;
