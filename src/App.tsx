import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { SmoothScroll } from "@/components/SmoothScroll";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductsIndex from "./pages/ProductsIndex";
import CategoryPageRoute from "./pages/CategoryPage";
import ProductPageRoute from "./pages/ProductPage";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import ContactSales from "./pages/ContactSales";
import SolutionsIndex from "./pages/SolutionsIndex";
import SolutionPage from "./pages/SolutionPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SmoothScroll>
          <PageTransition />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact-sales" element={<ContactSales />} />
            <Route path="/solutions" element={<SolutionsIndex />} />
            <Route path="/solutions/:slug" element={<SolutionPage />} />
            <Route path="/products" element={<ProductsIndex />} />
            <Route
              path="/products/:categorySlug"
              element={<CategoryPageRoute />}
            />
            <Route
              path="/products/:categorySlug/:productSlug"
              element={<ProductPageRoute />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
