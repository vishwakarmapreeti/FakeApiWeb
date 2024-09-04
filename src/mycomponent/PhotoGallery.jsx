import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PhotoGallery.css";
import Pagination from 'react-bootstrap/Pagination';

function PhotoGallery() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
 

  const fetchPhotos = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );
      const data = await response.json();
      setPhotos(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [albumId]);

  return (
    <div id="wrapper-div">
      <div>
        <h2>Photo Gallery for Album ID: {albumId}</h2>
        <div ClassName={"d-flex me-auto gap-2"}>
          {photos.map((photo) => (
            <div key={photo.id}>
              <img
                src={photo.url}
                alt={photo.title}
                // style={{ width: "150px", height: "150px",padding:"5px"}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
