import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import HomePage from "./Pages/HomePage";
import WorkPage from "./Pages/WorkPage";
import AboutPage from "./Pages/AboutPage";

const App = () => (
  
  <BrowserRouter>
    	<Routes>
			<Route path="/" element={<HomePage/>} />
			<Route path="/workproject" element={<WorkPage/>} />
			<Route path="/about" element={<AboutPage/>} />
		</Routes>
  </BrowserRouter>
);

export default App;
