import React, { useEffect, useState } from "react";
import httpConf from "../services/http.config";
import { getImages } from "../services/images.service";
import useGetImages from "./useGetImages";

function useFilterImages() {
  const imagesData = useGetImages();
  const [filteredImages, setFilteredImages] = useState();

  const handleChange = (e) => {
    const newList = imagesData.filter((img) =>
      img.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredImages(newList);
  };

  return { filteredImages:filteredImages || imagesData, handleChange };
}

export default useFilterImages;
