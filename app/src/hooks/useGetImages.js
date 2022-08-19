import React, { useEffect, useState } from "react";
import httpConf from "../services/http.config";
import { getImages } from "../services/images.service";

function useGetImages() {
  const [images, setImages] = useState();

  useEffect(() => {
    ;(async () => {
      const imagesData = await getImages();
      console.log(imagesData);
      setImages(imagesData.data);
    })();
  }, []);

  return images;
}

export default useGetImages;
