import React from "react";
import PostTable from "./PostTable";
import Usertable from "./UserTable";
import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Footer from "./Home/Footer";
import Album from "./Home/Album";
import PhotoGallery from "./PhotoGallery";

const RouterPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/post" element={<PostTable />} />
        <Route path="/users" element={<Usertable />} />

        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Album />} />
        <Route path="/album/:albumId" element={<PhotoGallery />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default RouterPage;
