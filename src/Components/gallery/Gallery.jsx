import * as React from "react";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



// Simulate item data with image URLs
function getItems(nextGroupKey, count) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({
      groupKey: nextGroupKey,
      key: nextKey + i,
      imageUrl: `https://picsum.photos/200/300?random=${nextKey + i}`, // Generates random images
    });
  }
  return nextItems;
}

const Item = ({ imageUrl }) => (
  <div className="item">
    <img src={imageUrl} alt="Gallery Item" style={{ width: "100%", height: "auto" }} />
  </div>
);

export default function Gallery() {
  const [items, setItems] = React.useState(() => getItems(0, 10));
  const [isGalleryVisible, setGalleryVisible] = React.useState(true); // State for gallery visibility

  const toggleGalleryVisibility = () => {
    setGalleryVisible((prev) => !prev); // Toggle visibility
  };

  return (
    <div className="w-10/12 mx-auto">
          <h1 className="text-4xl text-center">Have look to our Gallery</h1>
     <div className="flex justify-center sticky top-5 py-8 z-10">
      
     <button
        onClick={toggleGalleryVisibility}
        className=" bg-slate-900 text-white p-2 rounded hover:bg-blue-800 hover:scale-110 transition-all duration-300"
      >
        {isGalleryVisible ? <FaEye  className="text-4xl "/> : <FaEyeSlash className="text-4xl " />}
      </button>
     </div>

      {isGalleryVisible && ( // Conditionally render the gallery
        <MasonryInfiniteGrid
          className="container"
          gap={5}
          onRequestAppend={(e) => {
            const nextGroupKey = (Number(e.groupKey) || 0) + 1;

            setItems([
              ...items,
              ...getItems(nextGroupKey, 10),
            ]);
          }}
        >
          {items.map((item) => (
            <Item data-grid-groupkey={item.groupKey} key={item.key} imageUrl={item.imageUrl} />
          ))}
        </MasonryInfiniteGrid>
      )}
    </div>
  );
}
