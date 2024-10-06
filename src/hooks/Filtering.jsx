import React from "react";
import { useSelector } from "react-redux";


function useFiltering(searchTerm) {
  // console.log("term",searchTerm)
  const musics = useSelector((state) => state.music.music);

  const searchText = String(searchTerm).toLowerCase();
  // console.log(newItems)

  const filtered = musics.filter((item) => {
    return (
       item.heading.toLowerCase().includes(searchText)
    );
  });
  // console.log("filtered",filtered)
  
  return filtered;
}

export default useFiltering;
