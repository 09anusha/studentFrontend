import Layouts from "./Components/Layouts";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sign_up from "./Pages/Sign_up";
import ViewTable from "./Pages/ViewTable";
import EditPage from "./Pages/EditPage";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sign_up" element={<Sign_up />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ViewTable" element={<ViewTable />} />
          <Route path="/edit-student/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
