import { Routes, Route } from 'react-router-dom';
import './LoggedIn.css';
import DefaultUserFeed from './UserFeed/DefaultUserFeed';
import Settings from './Settings/Settings';
import About from "../About/About";
import PreviewPost from './PreviewPost';
import ReadPost from './ReadPost/ReadPost';
import MyPosts from './MyPosts/MyPosts';
import Interests from '../../Components/Interests/Interests';

function LoggedIn() {
  return (
    <div id='logged-in-frame'>
      <Routes>
        <Route path="/" element={<DefaultUserFeed />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element= {<About/>}/>
        <Route path="/previewpost" element={<PreviewPost />} />
        <Route path="/readpost" element={<ReadPost />} />
        <Route path="/myposts" element={<MyPosts />} />
        <Route path="/interests" element={<Interests />} />

      </Routes>
    </div>
  );
}

export default LoggedIn;
