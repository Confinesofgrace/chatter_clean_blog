import { Routes, Route } from 'react-router-dom';
import './LoggedIn.css';
import DefaultUserFeed from './UserFeed/DefaultUserFeed';
import Settings from './Settings/Settings';
import PreviewPost from '../CreateNewPost/PreviewPost';

function LoggedIn() {
  return (
    <div id='logged-in-frame'>
      <Routes>
        <Route path="/" element={<DefaultUserFeed />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/previewpost" element={<PreviewPost />} />
      </Routes>
    </div>
  );
}

export default LoggedIn;
