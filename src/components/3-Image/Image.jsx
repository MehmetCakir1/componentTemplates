import React, { useState } from "react";
import "./image.css";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const images = [
  {
    id: 1,
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
  },
  {
    id: 2,
    url: "https://www.wbcsd.org/var/site/storage/images/media/images/nature-action2/201159-1-eng-GB/Nature-Action_i1140.jpg",
  },
  {
    id: 3,
    url: "https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg",
  },
  {
    id: 4,
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*",
  },
];

const Image = () => {
  const [index, setIndex] = useState(0);

  const handleLeftClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };
  const handleRightClick = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <>
      <h1 className="main-title">CLICKABLE IMAGES</h1>
      <div className="img-container">
        <div>
          <img src={images[index].url} alt="main" className="main-img" />
        </div>
        <div className="second-div">
          <BsFillArrowLeftCircleFill
            onClick={handleLeftClick}
            className="arrow"
          />
          {images.map((item, index) => {
            return (
              <img
              key={index}
                src={item.url}
                alt="sub-img"
                onClick={() => setIndex(index)}
                className="sub-img"
              />
            );
          })}
          <BsFillArrowRightCircleFill
            onClick={handleRightClick}
            className="arrow"
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Image;
