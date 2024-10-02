import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Bluebar from './components/Bluebar';
import Card from './components/basic-components/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AudioFeed from './screens/AudioFeed';
import AudioPage from './screens/AudioPage';
import HomeLayout from './screens/HomeLayout';

function App() {
  return (
    <div className="App h-screen w-[100%] ">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/audios" element={<AudioFeed />} />
      <Route path="/audios/:id" element={<AudioPage />} />
      </Routes>
      </BrowserRouter>
     
      {/* <div className='w-full h-full flex justify-center items-center'>
      <Card avatarClassName={""} cardType={"vertical"} bodyText={"Arcade Fire Presents “Memories of the Age of Anxiety,” an original piece of meditative music by the Grammy-winning band, hailing from Montreal."} headingText={"Basics"} subHeadingText={"Course . 3 - 10 min"} imgAlt={"alt"} imgSrc={"https://api.prod.headspace.com/content/media-items/45888/download-image?width=352.90625"}/>

      </div> */}
    </div>
  );
}

export default App;
