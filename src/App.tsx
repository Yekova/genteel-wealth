import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CabinetPage from "./pages/CabinetPage.tsx";
import GestionPatrimonialePage from "./pages/GestionPatrimonialePage.tsx";
import FiscalitePage from "./pages/FiscalitePage.tsx";
import PatrimoineProPage from "./pages/PatrimoineProPage.tsx";
import FinancementPage from "./pages/FinancementPage.tsx";
import ActualitesPage from "./pages/ActualitesPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cabinet" element={<CabinetPage />} />
          <Route path="/gestion-patrimoniale" element={<GestionPatrimonialePage />} />
          <Route path="/fiscalite" element={<FiscalitePage />} />
          <Route path="/patrimoine-professionnel" element={<PatrimoineProPage />} />
          <Route path="/financement" element={<FinancementPage />} />
          <Route path="/actualites" element={<ActualitesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
