import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { filterCard } from "../data/filterCardData";
import Card from "./basic-components/card/Card";
import useFiltering from "../hooks/Filtering";
import { useDispatch } from "react-redux";
import { getMusicById } from "../redux/reducers/musicReducer";

function TopBar() {
  const location = useLocation();
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [newData, setNewData] = useState([]);
  const dispatch = useDispatch();

  const filterCardData = filterCard;
  const filtered = useFiltering(searchText);

  // console.log(searchText)
  useEffect (() => {
      // console.log(filtered);
      setNewData(filtered);
    },
    [searchText]);

  if (location.pathname === "/") {
    return null;
  }
  return (
    <div className="p-5  bg-white w-full flex flex-col justify-center gap-y-3 h-fit">
      <div className="w-full  flex justify-evenly items-center">
        <div className="">
          <span
            className=""
            onClick={() => {
              setIsSearch(!isSearch);
            }}
          >
            <IoSearchOutline />
          </span>
        </div>
        <div className="flex justify-between items-center gap-x-2">
          <img src="logo1.png" alt="Logo" className="w-8" />
          <span className="text-2xl font-stone-600">headspace</span>
        </div>
        <div>
          <span>Mridula V</span>
        </div>
      </div>
      {isSearch && (
        <div className="w-full  h-screen bg-white gap-y-3 fixed top-0 left-0 flex flex-col px-10 py-5 ">
          <div className="w-full flex justify-center items-center gap-x-4">
            <span className="text-3xl text-stone-600 " onClick={()=>{setIsSearch(!isSearch);}}>&lt;</span>
          <input
            type="text"
            className="border-2 px-2 border-neutral-200 w-full rounded-md py-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          </div>
          
          {searchText.length === 0 ? (
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-y-3 py-10 gap-x-3">
              {filterCardData?.map((data, index) => (
                <div key={index} className="w-full  ">
                  <Card
                    className={data.className}
                    cardType={"filter"}
                    imgSrc={data.imgSrc}
                    imgAlt={data.imgAlt}
                    headingText={data.headingText}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-[50%] self-center grid md:grid-cols-3 sm:grid-cols-2 gap-y-3 py-10 gap-x-3">
              {newData?.map((music) => (
                <Link
                  to={`https://headspace-clone.netlify.app/audios/${music.id}`}
                  onClick={() => {
                    dispatch(getMusicById(music.id));
                  }}
                  className="sm:h-full h-fit"
                >
                  <div className="px-3 " key={music.id}>
                    <Card
                      avatarClassName={""}
                      className={"w-full "}
                      cardType={"vertical"}
                      bodyText={music.body}
                      headingText={music.heading}
                      subHeadingText={music.subheading}
                      imgAlt={"alt"}
                      imgSrc={music.img}
                      // isBIcon={true}
                      isHIcon={true}
                      isSIcon={true}
                      sicon={"speaker.png"}
                      // bicon={""}
                      hicon={"lock.png"}
                      onClick={() => {}}
                    />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default TopBar;
