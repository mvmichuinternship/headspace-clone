import React from "react";
import cn from "clsx";
import IconButton from "./IconButton";
import Avatar from "./Avatar";
import Heading from "./Heading";
import Subheading from "./Subheading";

function Card({
  className,
  cardType,
  headingText,
  subHeadingText,
  onClick,
  imgAlt,
  imgSrc,
  avatarClassName,
  isHIcon,
  hicon,
  isSIcon,
  sicon,
  isBIcon,
  bicon,
  bodyText,
}) {
  return (
    <div className={cn(`w-full`, className)} onClick={onClick}>
      {cardType === "basic" && (
        <div className="w-full flex flex-col bg-yellow-400 rounded-lg px-3 py-7 md:px-10 ">
          <span className="font-extrabold text-stone-800 text-lg">
            {headingText}
          </span>
          <span className="">{subHeadingText}</span>
        </div>
      )}
      {cardType === "explore" && (
        <div className={cn("w-full flex justify-between bg-stone-50 rounded-lg  h-[112px] ", className)}>
          <div className=" flex flex-col justify-center items-start gap-y-2  py-7 px-5">
          <Heading className="font-bold text-stone-800 text-2xl text-center  " isIcon={isHIcon} icon={hicon} text={headingText}/>
            <span className="text-md">{subHeadingText}</span>
          </div>
          <Avatar
            imgAlt={imgAlt}
            imgSrc={imgSrc}
            className={cn("rounded-r-lg w-28", avatarClassName)}
          />
        </div>
      )}

      {cardType === "horizontal" && (
        <div className="w-full  flex justify-between gap-x-4 items-center bg-white h-[112px] ">
          <div className="flex justify-start items-center gap-x-4 h-full">
          <Avatar
            imgAlt={imgAlt}
            imgSrc={imgSrc}
            className={`rounded-md w-36 h-full`}
          />
          <div className=" flex flex-col items-start text-start gap-y-2">
            <Heading className="font-bold text-stone-800 text-md " isIcon={isHIcon} icon={hicon} text={headingText}/>
              
            <Subheading className="text-xs" isIcon={isSIcon} icon={sicon} text={subHeadingText}/>
          </div>
          </div>
          
          <span className="text-xl text-stone-600">&gt;</span>
        </div>
      )}

{cardType === "vertical" && (
        <div className=" w-36 flex flex-col justify-start gap-x-4 items-center bg-white h-[112px] ">
          <div className="flex flex-col justify-start items-start gap-x-4 h-full">
          <Avatar
            imgAlt={imgAlt}
            imgSrc={imgSrc}
            className={cn("rounded-md w-36 h-full", avatarClassName)}
          />
          <div className=" flex flex-col items-start text-start gap-y-1">
            <Heading className="font-bold text-stone-800 text-md " isIcon={isHIcon} icon={hicon} text={headingText}/>
              
            <Subheading  isIcon={isSIcon} icon={sicon} text={subHeadingText}/>
            <Subheading className=" font-extrabold" isIcon={isBIcon} icon={bicon} text={bodyText}/>
          </div>
          </div>
          
         
        </div>
      )}
    </div>
  );
}

export default Card;
