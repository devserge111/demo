// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from '@/pages/Home';
// import ClientManagement from '@/pages/ClientManagement';
// import ServiceManagement from '@/pages/ServiceManagement';
// import CalendarPage from '@/pages/Calendar';
// import { Navbar } from '@/components/ui/Navbar';

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <div className="flex h-screen">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/clients" element={<ClientManagement />} />
//           <Route path="/services" element={<ServiceManagement />} />
//           <Route path="/calendar" element={<CalendarPage />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create the Query Client instance once
const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={200}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}
