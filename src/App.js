import { Routes, Route } from "react-router-dom"

import Home from "./pages/home/Home";
import Login from "./pages/home/Login";
import List from "./pages/list/List";
import Single from "./pages/list/Single";
import New from "./pages/list/New";
import { productInputs, userInputs } from "./data/formuser";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./components/style/dark.scss";



function App() {
  const{darkMode}=useContext(DarkModeContext);
  console.log(darkMode);
  return (
    <div className={darkMode?"app dark" :"app"}>
    <Routes>
     <Route path="/">
     <Route   index element={<Home/>}/>
     <Route   path="login" element={<Login/>}/>
     </Route>
     <Route path="/users">
      <Route   index element={<List/>}/>
      <Route   path=":userId" element={<Single/>}/>
      <Route   path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
     </Route>
     <Route path="/products">
      <Route   index element={<List/>}/>
      <Route   path=":productId" element={<Single/>}/>
      <Route   path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
     </Route>
    
        
      </Routes>
    </div>
  );
}

export default App;
