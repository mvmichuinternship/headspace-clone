import Heading from "../components/basic-components/Heading";
import Subheading from "../components/basic-components/Subheading";
import IconButton from "../components/basic-components/IconButton";
import Card from "../components/basic-components/Card";
import { useSelector } from "react-redux";

function AudioFocus(){
    const musics = useSelector((state) => state.music.music);
  const meditations = useSelector((state) => state.meditate.meditate);

  console.log(musics);
    return(
        <div className="w-full flex  justify-center  h-auto  gap-y-3 px-10 pb-20 pt-5 overflow-y-auto">
      <div className="md:w-[50%] w-full flex flex-col justify-center items-center h-full ">
        <Heading
          className={
            "md:w-full w-full text-3xl  leading-tight self-center font-bold text-stone-600"
          }
          text={"Meditate"}
        />
        <div className="md:flex md:gap-x-3 gap-y-3 md:flex-row w-full flex flex-col justify-start items-center md:items-start md:w-full md:h-[248px] h-auto">
          <div className="md:w-80 rounded-md w-full md:h-[145px]  h-fit">
            <img
              src="https://api.prod.headspace.com/content/media-items/80009/download-image?width=624"
              alt=""
              className="w-full rounded-md h-auto"
            />
          </div>
          <div className="flex flex-col  justify-start gap-y-3 items-start md:h-full h-auto">
            <span className="border border-neutral-100 px-2 py-1 rounded-md text-xs font-bold text-stone-600">
              Featured
            </span>
            <Heading
              className={
                "text-4xl leading-tight text-start font-bold text-stone-600"
              }
              isIcon={false}
              icon={""}
              text={"Switching Tasks"}
            />
            <Subheading
              text={"Meditation . 3-4 min"}
              className={"text-sm"}
            ></Subheading>
            <IconButton
              className={
                "rounded-full w-full py-3 text-white font-bold bg-blue-600"
              }
              title={"Start My Free Trial"}
            />
          </div>
        </div>
        <Heading
          className={
            "md:w-full pb-5 w-full text-2xl underline leading-tight self-center font-bold text-stone-600"
          }
          text={"Featured"}
        />

        <div className="md:w-full w-full gap-y-3 flex flex-col justify-center items-center pb-16 ">
          {musics.slice(0, 3).map((music) => (
            <div className="w-full  h-full">
              <Card
                avatarClassName={""}
                className={"w-full"}
                cardType={"horizontal"}
                bodyText={music.body}
                headingText={music.heading}
                subHeadingText={music.subheading}
                imgAlt={"alt"}
                imgSrc={music.img}
              />
            </div>
          ))}
        </div>
        <div className="w-full pb-10">
          <svg
            viewBox="0 0 636 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="css-9whsf3"
          >
            <path fill="url(#paint0_linear)" d="M0 0h636v140H0z"></path>
            <mask
              id="upsell"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="636"
              height="140"
            >
              <path fill="#FAF6F4" d="M0 0h636v140H0z"></path>
            </mask>
            <g mask="url(#upsell)">
              <path
                d="M417.181 118.248c2.301 32.394-12.572 50.766-21.525 63.644-13.952 14.876-31.634 35.21-76.536 36.292-38.101 1.522-56.84-15.417-72.533-30.181-20.48-22.761-25.827-36.242-26.859-69.768-.1-20.548 7.734-41.07 21.438-59.104 19.224-27.427 49.739-36.607 77.954-38.518 29.582-1.157 53.122 13.933 69.212 30.18 20.555 21.932 26.872 40.77 28.874 67.442"
                fill="#32AAFF"
              ></path>
              <path
                d="M402.977 118.54c1.969 27.729-10.761 43.456-18.425 54.478-11.943 12.735-27.078 30.14-65.514 31.066-32.614 1.303-48.654-13.197-62.087-25.834-17.531-19.483-22.108-31.023-22.991-59.72-.085-17.589 6.621-35.156 18.35-50.592 16.456-23.477 42.577-31.335 66.728-32.971 25.322-.99 45.471 11.926 59.245 25.834 17.594 18.773 23.001 34.898 24.715 57.729"
                fill="#fff"
              ></path>
              <path
                d="M390.28 118.805c1.673 23.558-9.142 36.919-15.653 46.284-10.146 10.818-23.005 25.606-55.66 26.392-27.707 1.107-41.335-11.212-52.747-21.948-14.894-16.553-18.782-26.356-19.533-50.737-.072-14.943 5.625-29.868 15.59-42.982 13.981-19.945 36.172-26.621 56.69-28.011 21.514-.842 38.632 10.132 50.333 21.948 14.949 15.949 19.542 29.648 20.998 49.045"
                fill="#FFCE00"
              ></path>
              <path
                d="M376.083 118.982c1.341 18.854-7.333 29.548-12.555 37.042-8.137 8.659-18.45 20.494-44.64 21.123-22.222.886-33.151-8.973-42.304-17.566-11.945-13.247-15.064-21.093-15.666-40.606-.058-11.96 4.511-23.905 12.504-34.4 11.212-15.963 29.01-21.306 45.466-22.419 17.254-.673 30.984 8.11 40.368 17.566 11.989 12.765 15.673 23.729 16.841 39.253"
                fill="#F47D31"
              ></path>
              <path
                d="M306.441 77.263a5.171 5.171 0 001.876 2.5 5.098 5.098 0 005.924 0 5.175 5.175 0 001.875-2.5M320.953 77.263a5.188 5.188 0 001.878 2.499 5.108 5.108 0 002.963.948c1.06 0 2.095-.331 2.962-.948a5.188 5.188 0 001.878-2.5M296.308 81.152a32.714 32.714 0 0022.254 8.756 32.712 32.712 0 0022.254-8.756"
                stroke="#413D45"
                stroke-width="2.21"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M472.029 64.059c-7.545-3.314-15.726-4.8-23.844-4.33-8.119.47-15.934 2.88-22.782 7.025a47.839 47.839 0 00-16.549 16.786c-4.023 6.88-6.273 14.68-6.558 22.735 2.365-6.165-7.433-11.849-13.068-8.368s-6.594 11.357-5.191 17.932c-3.397-9.736-16.032-15.317-25.283-11.17-9.252 4.147-12.941 17.047-7.381 25.807-7.32-8.363-22.488-5.115-27.518 4.386-5.03 9.5-1.485 21.958 5.784 30.361 11.891 13.734 31.031 18.167 48.736 21.796 34.506 7.058 147.875 7.267 182.37 14.327 17.581 3.599 36.673 11.901 53.079 5.529 12.138-4.717 12.507-7.572 19.057-18.686 10.256-17.419 17.31-38.574 10.74-58.182-3.535-10.542-10.757-19.684-19.173-27.08-16.224-14.237-37.96-22.766-59.117-20.922-21.157 1.844-33.017 6.916-40.865 26.253l-1.973-3.043c-11.64-17.84-30.913-32.563-50.464-41.156z"
                fill="#fff"
              ></path>
              <ellipse
                cx="38.5"
                cy="150"
                rx="52.5"
                ry="46"
                fill="#fff"
              ></ellipse>
              <path
                d="M115.732 173.615c75.019 1.007 151.285 2.06 226.14-2.464 1.275-13.024-7.139-24.34-16.862-30.875-9.724-6.535-21.713-10.132-33.48-7.18 3.137-8.973-.683-17.966-7.776-24.954-3.601-3.473-8.139-6.08-13.189-7.578a35.4 35.4 0 00-15.685-.988c2.05-10.716-4.03-22.284-14.613-27.796-10.583-5.512-24.963-4.605-34.555 2.181 4.19-6.045 1.56-14.923-5.42-18.364-6.979-3.441-16.913-.736-20.494 5.587-9.29-13.235-30.206-18.939-46.282-12.58-16.076 6.358-25.253 23.932-20.306 38.89-7.702-4.413-19.304-5.038-27.644-1.657-8.34 3.38-14.534 10.48-16.44 18.435a25.497 25.497 0 00.213 12.075c1.037 3.966 3.015 7.692 5.803 10.93-8.647-4.177-21.137-1.703-27.57 4.897-6.433 6.601-7.97 16.264-5.368 24.688.856 3.069 2.463 5.935 4.708 8.394 3.945 4.096 9.928 6.147 15.786 7.557 16.367 4.006 36.49 4.192 53.034.802z"
                fill="#fff"
              ></path>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="318.848"
                y1="140"
                x2="318.848"
                y2="14"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#F5F2ED"></stop>
                <stop offset="1" stop-color="#F5F2ED" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="css-118k938">
            <header className="css-1qd7glr">Discover more mindfulness</header>
            <span>
              Try Headspace for free and unlock meditations for any mood.
            </span>
          </div>
          <a
            className="css-q4tyym"
            href="https://www.headspace.com/subscriptions"
            target="_self"
            rel=""
            data-testid="free-trial-banner-button-link"
          >
            <span className="css-1fvtd4u">Start your free trial</span>
          </a>
        </div>
        <Heading
          className={
            "md:w-full pb-5 w-full text-xl  leading-tight self-center font-bold text-stone-600"
          }
          text={"Today's Meditation"}
        />
        <div className="pb-10 w-full">
        <Card
                avatarClassName={""}
                className={"w-full bg-yellow-400 rounded-lg"}
                cardType={"explore"}
                headingText={"Focus and Insight"}
                subHeadingText={"3-20 min . Meditation"}
                imgAlt={"alt"}
                imgSrc={"https://api.prod.headspace.com/content/media-items/81511/download-image?width=224"}
              />
        </div>
        
        <Heading
          className={
            "md:w-full pb-5 w-full text-xl leading-tight self-center font-bold text-stone-600"
          }
          text={"Explore Meditation"}
        />
        <div className=" w-full gap-y-3 flex flex-col justify-center items-center pb-16 ">
          {meditations.map((music) => (
            <div className="w-full  h-full" key={music.id}>
              <Card
                avatarClassName={""}
                className={"w-full"}
                cardType={"explore"}
                // bodyText={music.body}
                headingText={music.heading}
                subHeadingText={music.subheading}
                imgAlt={"alt"}
                imgSrc={music.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}
export default AudioFocus;