import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout";

function Portfolio() {
  return (
    <>
      <Toaster position="top-center"/>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="*" element={<Layout/>}></Route>
      </Routes>
      <Analytics />
    </>
  );
}

export default Portfolio;
