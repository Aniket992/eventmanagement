import React, { useEffect, useState } from "react";
import axios from "axios";
import URL from "../../../apiconfig";

const Gallery = () => {
  const [gallery, setGallery] = useState({ photos: [], video: "" });
  const [newPhoto, setNewPhoto] = useState(null);
  const [newVideo, setNewVideo] = useState("");

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const response = await axios.get(`${URL}/api/gallery`);
      setGallery(response.data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
      alert("Error fetching gallery");
    }
  };

  const handleDeletePhoto = async (id) => {
    try {
      const Authorization = localStorage.getItem('token');
      await axios.delete(`${URL}/api/gallery/${id}`, {
        headers: { Authorization }
      });
      setGallery((prevGallery) => ({
        ...prevGallery,
        photos: prevGallery.photos.filter(photoId => photoId !== id)
      }));
      alert("Photo deleted successfully");
    } catch (error) {
      console.error("Error deleting photo:", error);
      alert("Error deleting photo");
    }
  };

  const handleDeleteVideo = async () => {
    try {
      const Authorization = localStorage.getItem('token');
      await axios.delete(`${URL}/api/gallery/video`, {
        headers: { Authorization }
      });
      setGallery((prevGallery) => ({
        ...prevGallery,
        video: ""
      }));
      alert("Video deleted successfully");
    } catch (error) {
      console.error("Error deleting video:", error);
      alert("Error deleting video");
    }
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    const Type = "permanent";
    const formData = new FormData();
    formData.append('upload', file);

    try {
      const Authorization = localStorage.getItem('token');
      const response = await axios.post(`${URL}/api/file/upload`, formData,Type ,{
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization
        }
      });
      setGallery((prevGallery) => ({
        ...prevGallery,
        photos: [...prevGallery.photos, response.data.fileId]
      }));
      alert("Photo uploaded successfully");
    } catch (error) {
      console.error("Error uploading photo:", error);
      alert("Error uploading photo");
    }
  };

  const handleVideoUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('upload', file);

    try {
      const Authorization = localStorage.getItem('token');
      const response = await axios.post(`${URL}/api/file/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization
        }
      });
      setGallery((prevGallery) => ({
        ...prevGallery,
        video: response.data.fileId
      }));
      alert("Video uploaded successfully");
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("Error uploading video");
    }
  };

  return (
    <div className="gallery-container p-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Gallery</h1>
      <div className="gallery-list mb-5 grid grid-cols-4 gap-4">
        {gallery.photos.map((photo) => (
          <div key={photo} className="gallery-item bg-gray-200 p-4 rounded flex flex-col items-center">
            <img src={`${URL}/api/file/view/${photo}`} alt="Gallery" className="w-full h-40 object-cover rounded mb-2" />
            <button
              className="bg-red-600 p-2 rounded text-white"
              onClick={() => handleDeletePhoto(photo)}
            >
              Delete
            </button>
          </div>
        ))}
        {gallery.video && (
          <div className="gallery-item bg-gray-200 p-4 rounded flex flex-col items-center">
            <video controls src={`${URL}/api/file/view/${gallery.video}`} className="w-full h-40 object-cover rounded mb-2" />
            <button
              className="bg-red-600 p-2 rounded text-white"
              onClick={handleDeleteVideo}
            >
              Delete Video
            </button>
          </div>
        )}
      </div>
      <div className="upload-section">
        <h2 className="text-2xl mb-4">Add New Photo</h2>
        <input type="file" onChange={handlePhotoUpload} />
      </div>
      <div className="upload-section mt-5">
        <h2 className="text-2xl mb-4">Add New Video</h2>
        <input type="file" onChange={handleVideoUpload} />
      </div>
    </div>
  );
};

export default Gallery;
