import { useSelector } from "react-redux";
import Card from "../components/basic-components/Card";
import PlayAudio from "../components/PlayAudio";
import { useState } from "react";

function AudioPage() {
  const musics = useSelector((state) => state.music.musicById);
  console.log(musics)
    const [isPlayAudio, setIsPlayAudio] = useState(false)
    const [playAudio, setPlayAudio] = useState("")
    const [coverImage, setCoverImage] = useState("")


  return (
    <div className="w-[100%] h-screen flex flex-col justify-center items-center gap-y-3">
      <div className="md:w-[50%] w-full h-full flex flex-col justify-center items-center">
        {musics?.audios?.map((music) => (
          <div className="w-full  h-full">
            <Card
              avatarClassName={""}
              className={"w-full gap-y-3 h-24"}
              cardType={"explore"}
              headingText={music.title}
              subHeadingText={music.artists}
              imgAlt={"alt"}
              imgSrc={music.img}
              // isBIcon={true}
              // bicon={""}
            //   hicon={"lock.png"}
              onClick={() => {setIsPlayAudio(true);setPlayAudio(music.song);setCoverImage(music.img) }}
            />
          </div>
        ))}
      </div>
      {
        isPlayAudio&&(
            <div className="w-full">
            <PlayAudio audio={playAudio} img = {coverImage}/>
          </div>
        )
      }
     
    </div>
  );
}
export default AudioPage;
