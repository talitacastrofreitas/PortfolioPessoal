import { BrowserRouter, Route, Routes } from "react-router-dom";
import Site from "./Site/site";
import Projetos from "./Site/pages/Projetos";
import Login from "./App/Login";
import Aplicativo from "./App/aplicativo";

function App() {
  return (
   <BrowserRouter>
   <Routes>

    <Route path="/" element= {< Site />} exact />
    <Route path="/projetos" element= {<Projetos />} exact />
    <Route path="/app" element= {<Login />} exact />
    <Route path="/aplicativo" element= {<Aplicativo />} exact />

   </Routes>
   </BrowserRouter>
  );
}

export default App;
