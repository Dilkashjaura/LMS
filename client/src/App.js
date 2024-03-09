import Login from "./component/Login";
import {Routes, Route} from "react-router-dom"
import Signup from "./component/Signup";

function App() {
  return (

    <>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
    </Routes>
    </>

  );
}
export default App;
