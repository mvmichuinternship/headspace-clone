import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/basic-components/Card";

function AudioFeed() {
  const musics = useSelector((state) => state.music.music);
  const [subIcons, setSubIcons] = useState("meditate");

  useEffect(() => {
    setSubIcons();
  });
  return (
    <div className="flex w-[100%] h-screen justify-center items-start py-5">
      <div className="flex flex-col justify-start items-center sm:w-[50%] w-full px-4 h-[100%]">
        <div className="flex justify-evenly py-4">
          <span className="text-2xl text-stone-600">New and Popular</span>
        </div>
        <div className="md:w-full w-full gap-y-3 sm:grid sm:content-start md:grid-cols-4 sm:grid-cols-3 w-full flex flex-wrap justify-center items-center gap-x-3 gap-y-3 h-full  ">
          {musics.map((music) => (
            <div className="px-3" key={music.id}>
              {() => {setSubIcons(music.type);
              console.log(subIcons)}
              }
              <Card
                avatarClassName={""}
                className={"w-full h-fit"}
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
          ))}
        </div>
      </div>
    </div>
  );
}
export default AudioFeed;
