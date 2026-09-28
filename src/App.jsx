import React from "react";
import { getStudentsApiData } from "./Services/api";
import LayoutD from "./Components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Students from "./Pages/Students/Students";
import Staff from "./Pages/Staff/Staff";

const App = () => {
  getStudentsApiData();
  return (
    <>
      <LayoutD />
      <Routes>
        <Route path="/students" element={<Students />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </>
  );
};

export default App;
