import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/layout/layout";
import HomePage from "@/pages/home";
import NotFoundPage from "@/pages/not-found";
import AboutPage from "@/pages/about";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage/>}/>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
