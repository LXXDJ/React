import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import About from './pages/About';
import Menu from './pages/Menu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Header와 Navbar는 그대로 두고 그 하위 컴포넌트만 렌더링시킴 */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="menu" element={<Menu/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;