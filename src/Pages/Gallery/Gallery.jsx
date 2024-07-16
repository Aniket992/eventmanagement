import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import URL from "../../apiconfig";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch(`${URL}/api/gallery`);
        if (response.ok) {
          const data = await response.json();
          setPhotos(data.photos);
          setVideo(data.video);
        } else {
          console.error('Failed to fetch gallery data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching gallery data:', error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchGalleryData();
  }, []);

  return (
    <>
      <div className="flex flex-col bg-black w-full min-h-screen">
        <Navbar />

        <div className="min-h-screen text-white text-center   gap-1 p-1 justify-center flex flex-wrap">
          {photos.map((photoId, index) => (
            <div key={index} className="w-46 h-64   m-3 rounded-xl shadow">
              <img
                src={`${URL}/api/file/view/${photoId}`}
                className="w-full h-64 object-cover object-center rounded-xl"
                alt="Gallery"
                onLoad={() => setLoading(false)} 
                onError={() => console.error(`Failed to load image ${photoId}`)} // Handle image load error
              />
              {loading && (
                <div className="absolute top-0 left-0 w-full h-64 flex items-center justify-center bg-gray-900 bg-opacity-50">
                  <p className="text-white">Loading...</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
