import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/basic-components/card/Card";
import { Link } from "react-router-dom";
import { getMusicById } from "../redux/reducers/musicReducer";

function AudioFeed() {
  const musics = useSelector((state) => state.music.music);
  const [subIcons, setSubIcons] = useState("meditate");
  const dispatch= useDispatch()
  function handleClick(){
    
  }

//   useEffect(() => {
//     setSubIcons();
//   });
  return (
    <div className="flex w-[100%] h-screen justify-center items-start py-5">
      <div className="flex flex-col justify-start items-center sm:w-[70%] md:w-[50%] w-full px-4 h-[100%]">
        <div className="flex justify-evenly py-4">
          <span className="text-2xl text-stone-600">New and Popular</span>
        </div>
        <div className="md:w-full w-full  sm:grid sm:content-start md:grid-cols-4 sm:grid-cols-3  flex flex-wrap justify-center items-center gap-x-3 gap-y-3 h-full ">
          {musics?.map((music) => (
            <Link to={`https://headspace-clone.vercel.app/audios/${music.id}`} onClick={()=>{dispatch(getMusicById(music.id))}} className="sm:h-full h-fit">
            <div className="px-3 " key={music.id}>
              {() => {setSubIcons(music.type);
              console.log(subIcons)}
              }
              
             
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
                sicon={
                  (subIcons === "meditate" && "speaker.png") ||
                  (subIcons === "music" && "") ||
                  (subIcons === "video" && "")
                }
                // bicon={""}
                hicon={"lock.png"}
                onClick={()=>{}}
              />
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default AudioFeed;
