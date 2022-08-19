import React from "react";
import useGetImages from "../../hooks/useGetImages";
import Card from "../Card";
import styles from "./styles.module.scss"


function ImageList({images}) {
  console.log("Images",images)
  return (
    <section>
      <div className={styles.images}>
        {images &&
          images.map((img) => {
            return (
              <Card img={img}/>
            );
          })}
      </div>
    </section>
  );
}

export default ImageList;
