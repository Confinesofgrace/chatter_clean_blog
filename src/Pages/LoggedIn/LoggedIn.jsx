import { Routes, Route } from 'react-router-dom';
import './LoggedIn.css';
import DefaultUserFeed from './UserFeed/DefaultUserFeed';
import Settings from './Settings/Settings';
import PreviewPost from './PreviewPost';
import ReadPost from './ReadPost/ReadPost';
import MyPosts from './MyPosts/MyPosts';

function LoggedIn() {
  return (
    <div id='logged-in-frame'>
      <Routes>
        <Route path="/" element={<DefaultUserFeed />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/previewpost" element={<PreviewPost />} />
        <Route path="/readpost" element={<ReadPost />} />
        <Route path="/myposts" element={<MyPosts />} />

      </Routes>
    </div>
  );
}

export default LoggedIn;
