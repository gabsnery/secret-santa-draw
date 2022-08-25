import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Draw from "./pages/Draw";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Form' element={<Home/>}/>
          <Route path='/draw' element={<Draw/>}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
export default App;