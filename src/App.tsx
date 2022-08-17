import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Form from "./components/form";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/Form' element={<Form/>}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}
export default App;