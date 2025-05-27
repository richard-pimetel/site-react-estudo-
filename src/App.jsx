
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ComponentsPage from "@/pages/ComponentsPage";
import PropsPage from "@/pages/PropsPage";
import StatePage from "@/pages/StatePage";
import HooksPage from "@/pages/HooksPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ResourcesPage from "@/pages/ResourcesPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fundamentos/componentes" element={<ComponentsPage />} />
            <Route path="/fundamentos/props" element={<PropsPage />} />
            <Route path="/fundamentos/estado" element={<StatePage />} />
            <Route path="/fundamentos/hooks" element={<HooksPage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/recursos" element={<ResourcesPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
