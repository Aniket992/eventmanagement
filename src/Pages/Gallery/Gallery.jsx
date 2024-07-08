import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import URL from "../../apiconfig";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [video, setVideo] = useState("");
  const [hoveredImage, setHoveredImage] = useState("");

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(`${URL}/api/gallery`);
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setPhotos(data.photos);
          setVideo(data.video);
        } else {
          console.error('Failed to fetch gallery data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching gallery data:', error.message);
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <>
      <div className="flex flex-col bg-black w-full min-h-screen ">
        <Navbar />

        <div className=" min-h-screen  justify-evenly gap-3 p-1  flex flex-wrap  ">
          {photos.map((photoId, index) => (
            <div
              key={index}
              className= " w-1/5"
              onMouseEnter={() => setHoveredImage(`${URL}/api/file/view/6689ae807a3a6f6c97bbe755`)}
              onMouseLeave={() => setHoveredImage("")}
            >
              <img
                src={`${URL}/api/file/view/${photoId}`}
                className="w-full h-full object-cover rounded-xl"
                alt="Gallery"
              />
            </div>
          ))}
          {/* <div className="col-span-1 row-span-4 flex items-center justify-center bg-gray-700">
            {hoveredImage ? (
              <img
                src={hoveredImage}
                className="w-full h-full object-cover rounded-xl"
                alt="Hovered"
              />
            ) : (
              <iframe
                className="w-full h-full"
                src={video.replace("watch?v=", "embed/")}
                referrerPolicy="strict-origin-when-cross-origin"
                title="Video"
              ></iframe>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Gallery;
