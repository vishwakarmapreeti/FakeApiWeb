import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Album() {
  const [photos, setPhotos] = useState([]);
  const preeti = useNavigate();

  const fetchAlbum = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const data = await response.json();
      setPhotos(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleButtonClick = (albumId) => {
    preeti(`/album/${albumId}`);
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center", paddingTop: "20px" }}>All Albums</h2>
      <div>
        {photos.map((album) => (
          <Card
            key={album.id}
            style={{
              width: "200px",
              padding: "20px",
              margin: "10px",
              display: "inline-block",
              border: "1px solid black",
              boxShadow: "0 0 6px black",
              textAlign: "center",
              minHeight: "50px",
            }}
          >
            <Card.Body>
              <Card.Title>Album {album.id}</Card.Title>
              {album.title.split(" ").slice(0, 1)}
              {album.title.split(" ").length > 1 ? "..." : ""}

              <Button
                variant="primary"
                onClick={() => handleButtonClick(album.id)}
              >
                View Photos
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Album;
