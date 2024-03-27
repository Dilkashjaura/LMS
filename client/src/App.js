import {Routes, Route} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddBook from "./pages/AddBook";
import HomePage from "./pages/HomePage";



function App() {
  return (
    
    <>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Addbook' element={<AddBook/>}></Route>
      <Route path='/HomePage' element={<HomePage/>}></Route>

    </Routes>
    </>

  );
}
export default App;
