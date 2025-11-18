import StarsCanvas from "./components/Stars";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logoImage from './assets/images/LogoSpaceH.Newbl.png'
//Pages
import HomePage from "./Pages/HomePage";
import WorkPage from "./Pages/WorkPage";
import AboutPage from "./Pages/AboutPage";

const App = () => (
  
  <BrowserRouter>
	{/* Background 3D - luôn dưới cùng */}
	<StarsCanvas />
	<img src={logoImage} alt="" className="fixed w-full   px-50 pt-6 -z-10 opacity-7 pointer-events-none"/>
	{/* Tất cả UI nằm trên */}
	<div className="relative z-0">
    	<Routes>
			<Route path="/" element={<HomePage/>} />
			<Route path="/workproject" element={<WorkPage/>} />
			<Route path="/about" element={<AboutPage/>} />
		</Routes>
	</div>
  </BrowserRouter>
);

export default App;
