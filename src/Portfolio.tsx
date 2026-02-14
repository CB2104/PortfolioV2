import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "./components/Layout";
import { Analytics } from "@vercel/analytics/react";

function Portfolio() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="*" element={<Layout />}></Route>
      </Routes>
      <Analytics />
    </>
  );
}

export default Portfolio;
