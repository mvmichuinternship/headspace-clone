import { useLocation } from "react-router-dom";

function PlayAudio({
    img, audio
}){
    // const location = useLocation();
    console.log(audio)
//   if (location.pathname !== "/audios" && location.pathname !== "/meditate" && location.pathname !== "/focus") {
//     return null;
//   }
    return (
        <div className="py-2 bg-yellow-400 flex justify-center items-center fixed bottom-0 left-0 w-full gap-x-20">
            <audio  src={audio} controls autoPlay className="w-[50%]"/>
            <img src={img} alt="" className="w-20 rounded-lg"/>
        </div>
    )
}
export default PlayAudio;