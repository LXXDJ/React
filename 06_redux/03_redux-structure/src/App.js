import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Main from './pages/Main';
import Menus from './pages/Menus';
import MenuDetail from './pages/MenuDetail';
import Reviews from './pages/Reviews';
import ReviewDetail from './pages/ReviewDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>} />
          <Route path='menu'>
            <Route index element={<Menus/>} />
            <Route path=':id' element={<MenuDetail/>} />
          </Route>
          <Route path='review'>
            <Route index element={<Reviews/>} />
            <Route path=':id' element={<ReviewDetail/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;