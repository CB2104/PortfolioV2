import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "./components/Layout";

function Portfolio() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default Portfolio;
