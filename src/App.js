import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
// import Homepage from './components/Homepage';
// import Bluebar from './components/Bluebar';
// import Card from './components/basic-components/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AudioPage from './screens/AudioPage';
import HomeLayout from './screens/HomeLayout';
import BottomBar from './components/BottomBar';
import AudioMeditate from './screens/AudioMeditate';
import AudioFocus from './screens/AudioFocus';
import TopBar from './components/TopBar';
import AudioFeed from './screens/AudioFeed';
import PlayAudio from './components/PlayAudio';

function App() {
  return (
    <div className="App h-screen w-[100%] ">
      <BrowserRouter>
      <TopBar/>
      <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/audios/:name" element={<AudioPage />} />
      <Route path="/meditate" element={<AudioMeditate />} />
      <Route path="/all" element={<AudioFeed />} />
      <Route path="/focus/id" element={<AudioMeditate />} />
      <Route path="/focus" element={<AudioFocus />} />
      </Routes>
      <BottomBar/>
      {/* <PlayAudio/> */}
      </BrowserRouter>
     
      {/* <div className='w-full h-full flex justify-center items-center'>
      <Card avatarClassName={""} cardType={"vertical"} bodyText={"Arcade Fire Presents “Memories of the Age of Anxiety,” an original piece of meditative music by the Grammy-winning band, hailing from Montreal."} headingText={"Basics"} subHeadingText={"Course . 3 - 10 min"} imgAlt={"alt"} imgSrc={"https://api.prod.headspace.com/content/media-items/45888/download-image?width=352.90625"}/>

      </div> */}
    </div>
  );
}

export default App;
