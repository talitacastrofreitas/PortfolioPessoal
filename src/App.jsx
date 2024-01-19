import { BrowserRouter, Route, Routes } from "react-router-dom";
import Site from "./Site/site";
import Projetos from "./Site/pages/Projetos";

function App() {
  return (
   <BrowserRouter>
   <Routes>

<Route path="/" element= {< Site />} exact />
<Route path="/projetos" element= {<Projetos />} exact />

   </Routes>
   </BrowserRouter>
  );
}

export default App;
