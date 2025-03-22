
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import About from "./pages/About";
import MairieAccount from "./pages/MairieAccount";
import CommercantAccount from "./pages/CommercantAccount";
import CommuneDetails from "./pages/CommuneDetails";
import VisitorPresentation from "./pages/VisitorPresentation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/account/mairie" element={<MairieAccount />} />
          <Route path="/account/commercant" element={<CommercantAccount />} />
          <Route path="/commune/:communeName" element={<CommuneDetails />} />
          <Route path="/visitor" element={<VisitorPresentation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
